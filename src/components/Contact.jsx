import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        description: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    emailjs.init('Cgbsrd-l7hOwaVewT');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateEmailFormat = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const verifyEmailExists = async (email) => {
        try {
            const response = await fetch(
                `https://emailvalidation.abstractapi.com/v1/?api_key=3596229bcc80443f96211505ec45a10c&email=${email}`
            );
            const data = await response.json();

            // Check various indicators of email validity
            const isDeliverable = data.deliverability === "DELIVERABLE";
            const isValidFormat = data.is_valid_format?.value;
            const isDisposable = data.is_disposable_email?.value;

            return isDeliverable && isValidFormat && !isDisposable;
        } catch (error) {
            console.error("Email verification error:", error);
            // Fallback to basic validation if API fails
            return true;
        }
    };

    const validateEmail = async () => {
        const email = formData.email.trim();

        if (!email) {
            setErrors((prev) => ({ ...prev, email: 'Email is required' }));
            toast.error('Email is required');
            return false;
        }

        if (!validateEmailFormat(email)) {
            setErrors((prev) => ({ ...prev, email: 'Please enter a valid email' }));
            toast.error('Please enter a valid email');
            return false;
        }

        // Block your own email
        if (email.toLowerCase() === 'priyaagrawal0108@gmail.com') {
            setErrors((prev) => ({ ...prev, email: 'You cannot use this email address' }));
            toast.error('You cannot use this email address');
            return false;
        }

        // Verify email existence
        const emailExists = await verifyEmailExists(email);
        if (!emailExists) {
            setErrors((prev) => ({ ...prev, email: 'This email address does not exist,Please enter Valid email' }));
            toast.error('This email address does not exist ,Please enter Valid email');
            return false;
        }

        setErrors((prev) => ({ ...prev, email: '' }));
        return true;
    };

    const validateSubject = () => {
        if (!formData.subject.trim()) {
            setErrors((prev) => ({ ...prev, subject: 'Subject is required' }));
            return false;
        } else if (formData.subject.length < 5) {
            setErrors((prev) => ({ ...prev, subject: 'Subject must be at least 5 characters' }));
            return false;
        } else {
            setErrors((prev) => ({ ...prev, subject: '' }));
            return true;
        }
    };

    const validateDescription = () => {
        if (!formData.description.trim()) {
            setErrors((prev) => ({ ...prev, description: 'Description is required' }));
            return false;
        } else if (formData.description.length < 20) {
            setErrors((prev) => ({ ...prev, description: 'Description must be at least 20 characters' }));
            return false;
        } else {
            setErrors((prev) => ({ ...prev, description: '' }));
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const isEmailValid = await validateEmail();
        const isSubjectValid = validateSubject();
        const isDescriptionValid = validateDescription();

        if (isEmailValid && isSubjectValid && isDescriptionValid) {
            try {
                const response = await emailjs.send(
                    'Itspriya123',
                    'template_b1sp1bw',
                    {
                        from_email: formData.email,
                        to_email: 'priyaagrawal0108@gmail.com',
                        subject: formData.subject,
                        description: formData.description
                    }
                );

                if (response.status === 200) {
                    toast.success('Message sent successfully!');
                    setFormData({ email: '', subject: '', description: '' });
                    setErrors({});
                }
            } catch (error) {
                console.error('Email send error:', error);
                toast.error('Failed to send message. Please try again later.');
            }
        }

        setIsSubmitting(false);
    };

    return (
        <div
            className="flex flex-col justify-center items-center  bg-cover bg-center py-14"
            style={{ backgroundImage: "url('./assets/girl2.avif')" }}
        >
            <ToastContainer position="top-center" autoClose={5000} />
            <div className='bg-white bg-opacity-10 backdrop-blur-2xl p-8 rounded-xl shadow-2xl w-full max-w-md border border-white border-opacity-20'>
                <h1 className='text-center text-3xl font-bold text-white mb-6'>Contact Me</h1>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div>
                        <input
                            className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white  placeholder-white placeholder-opacity-50 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${errors.email ? 'border-2 border-red-500' : 'border border-white border-opacity-30'}`}
                            type='email'
                            name='email'
                            placeholder='Your email address'
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={validateEmail}
                        />
                        {errors.email && <p className='text-red-400 text-sm mt-1'>{errors.email}</p>}
                    </div>

                    <div>
                        <input
                            className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-10  text-white placeholder-white placeholder-opacity-50 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${errors.subject ? 'border-2 border-red-500' : 'border border-white border-opacity-30'}`}
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            value={formData.subject}
                            onChange={handleChange}
                            onBlur={validateSubject}
                        />
                        {errors.subject && <p className='text-red-400 text-sm mt-1'>{errors.subject}</p>}
                    </div>

                    <div>
                        <textarea
                            className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-10  text-white placeholder-white placeholder-opacity-50 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all min-h-[150px] ${errors.description ? 'border-2 border-red-500' : 'border border-white border-opacity-30'}`}
                            name='description'
                            placeholder='Your message...'
                            value={formData.description}
                            onChange={handleChange}
                            onBlur={validateDescription}
                        />
                        {errors.description && <p className='text-red-400 text-sm mt-1'>{errors.description}</p>}
                    </div>

                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 rounded-lg  text-white transition-all ${isSubmitting ? 'bg-blue-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700'}`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;