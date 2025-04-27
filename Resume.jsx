import React from "react";
import image6 from "../assets/Priya_Agrawal_Resume.png";
import { toast, Toaster } from "react-hot-toast";

function Resume() {
    const handleDownload = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("src/assets/Priya_Agrawal_Resume (3).pdf");
            if (!response.ok) {
                throw new Error("Failed to fetch file");
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "Priya_Agrawal_Resume (3).pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

            toast.success("Resume downloaded successfully!");
        } catch (error) {
            toast.error("Failed to download resume.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Toaster />
            <button
                onClick={handleDownload}
                className="mb-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
                Download Resume
            </button>
            <img
                className="max-w-2xl  max-w-[600px] max-h-[530px] rounded-md shadow-lg"
                src={image6}
                alt="Resume Thumbnail"
            />
        </div>
    );
}

export default Resume;
