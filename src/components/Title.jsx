import React from 'react';
import { motion } from 'framer-motion';

const Title = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeOut",
                duration: 0.8
            }
        }
    };

    const nameItem = {
        hidden: { opacity: 0, x: -20 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                ease: "anticipate",
                duration: 0.8
            }
        }
    };

    const redText = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: "backOut",
                duration: 0.5,
                delay: 0.5
            }
        }
    };

    const descriptionItem = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 1.5
            }
        }
    };

    return (
        <motion.div
            className='text-white mx-4 sm:mx-8 md:mx-20 my-20 sm:my-32 md:my-60 justify-center space-y-3 font-["Poppins"]'
            initial="hidden"
            animate="show"
            variants={container}
        >
            <motion.div className='ji' variants={item}>
                <motion.p className='text-xl sm:text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300'>
                    I'm
                </motion.p>
            </motion.div>

            <motion.div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-relaxed" variants={nameItem}>
                <motion.p className='flex flex-wrap items-center gap-1 sm:gap-2'>
                    <motion.span
                        className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700'
                        variants={redText}
                    >
                        Priya
                    </motion.span>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-cyan-200'>
                        Agrawal
                    </span>
                </motion.p>
            </motion.div>

            <motion.div className='text-xl sm:text-2xl md:text-3xl font-semibold' variants={item}>
                <motion.p
                    className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500'
                    animate={{
                        backgroundImage: [
                            'linear-gradient(to right, #fcd34d, #fbbf24, #f59e0b)',
                            'linear-gradient(to right, #f59e0b, #fbbf24, #fcd34d)',
                            'linear-gradient(to right, #fbbf24, #f59e0b, #fbbf24)'
                        ],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    Software Developer
                </motion.p>
            </motion.div>

            <motion.div className='text-base sm:text-lg md:text-xl w-full md:w-2/3 font-medium' variants={descriptionItem}>
                <motion.p className='text-white leading-relaxed'>
                    Aspiring Software Developer with skills in Design and Sketch Artistry.
                    <br></br>
                    Currently interning at SSBA Tech (Jan 2025 - Present).
                </motion.p>
                
                <motion.p className='text-white leading-relaxed mt-3'>
                    Worked with: {' '}
                    <span className='text-cyan-300'>ReactJS</span>,{' '}
                    <span className='text-purple-300'>TypeScript</span>,{' '}
                    <span className='text-yellow-300'>Node.js</span>,{' '}
                    <span className='text-amber-300'>AWS</span>,{' '}
                    <span className='text-blue-300'>Google Cloud</span>, and{' '}
                    <span className='text-gray-300'>GitHub</span>.
                </motion.p>

                <motion.p
                    className='text-base sm:text-lg md:text-xl w-full md:w-2/3 mt-3 sm:mt-4 font-semibold italic bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400'
                    whileHover={{
                        scale: 1.02,
                        backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6, #ec4899)'
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    "Software Developer by Passion and Artist by heart!"
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Title;