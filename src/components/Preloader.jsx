import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './PreloaderStyles.css';

// Classic Elegant Line Drawing
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.4;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "tween", duration: 1.5, ease: "easeInOut" },
                opacity: { delay, duration: 0.1 }
            }
        };
    }
};

// Text container for classic reveal
const textContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.8,
        },
    },
};

// Classic fade up
const textItem = {
    hidden: { opacity: 0, y: 15 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

// Subtitle zoom and fade in
const fadeUp = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, delay: 1.5, ease: "easeOut" }
    }
}

const Preloader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500); // Sleek 3.5s loading time

        return () => clearTimeout(timer);
    }, [setLoading]);

    const title = "VPM".split("");

    return (
        <motion.div
            className="preloader-classic-premium"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            <div className="preloader-content-classic">
                <div className="preloader-logo-container-classic">
                    <motion.svg
                        width="200"
                        height="80"
                        viewBox="0 0 200 80"
                        fill="none"
                        initial="hidden"
                        animate="visible"
                        className="preloader-roof-svg-classic"
                    >
                        {/* Outer Elegant Roof Line */}
                        <motion.path
                            d="M 10 70 L 100 20 L 190 70"
                            stroke="#f2e2c6" /* Cream color for a premium classic look */
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={draw}
                            custom={0}
                        />
                        {/* Inner Elegant Roof Line */}
                        <motion.path
                            d="M 40 70 L 100 35 L 160 70"
                            stroke="#f2e2c6"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={draw}
                            custom={1}
                        />
                    </motion.svg>

                    <motion.div
                        variants={textContainer}
                        initial="hidden"
                        animate="show"
                        className="preloader-vpm-text-classic"
                    >
                        {title.map((char, index) => (
                            <motion.span
                                key={index}
                                variants={textItem}
                                className="preloader-vpm-char-classic"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="preloader-homestay-text-classic"
                    >
                        <span className="classic-line"></span>
                        HOMESTAY
                        <span className="classic-line"></span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
