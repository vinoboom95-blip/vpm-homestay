import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Rules', href: '#rules' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                transition: 'all 0.3s ease',
                backgroundColor: scrolled || isOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
                padding: scrolled ? '15px 0' : '25px 0',
                boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
            }}>
                <div className="container flex-between">
                    <a href="#" className="logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px', zIndex: 102, position: 'relative', textDecoration: 'none' }}>
                        <motion.svg
                            width="50"
                            height="20"
                            viewBox="0 0 200 80"
                            fill="none"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ marginBottom: '-4px' }}
                        >
                            <motion.path
                                d="M 10 70 L 100 20 L 190 70"
                                stroke={scrolled || isOpen ? 'var(--primary)' : '#fff'}
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                            <motion.path
                                d="M 40 70 L 100 35 L 160 70"
                                stroke={scrolled || isOpen ? 'var(--primary)' : '#fff'}
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            />
                            <motion.rect
                                x="92"
                                y="46"
                                width="16"
                                height="16"
                                fill={scrolled || isOpen ? 'var(--primary)' : '#fff'}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                            />
                        </motion.svg>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: scrolled || isOpen ? 'var(--secondary)' : '#fff', textShadow: scrolled || isOpen ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.05em', lineHeight: 1 }}
                            >
                                VPM
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em', lineHeight: 1, marginTop: '2px' }}
                            >
                                HomeStay
                            </motion.span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="desktop-menu">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="nav-link"
                                    style={{
                                        color: scrolled ? 'var(--text-main)' : '#fff',
                                        fontWeight: '500',
                                        fontSize: '1rem',
                                        textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)',
                                        '--nav-underline-color': scrolled ? 'var(--primary)' : '#fff'
                                    }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Book Now</a>
                        </li>
                    </ul>

                    {/* Mobile Toggle */}
                    <div className="mobile-toggle" style={{ zIndex: 102, position: 'relative' }}>
                        <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Toggle menu">
                            {isOpen ?
                                <X size={28} color="var(--secondary)" /> :
                                <Menu size={28} color={scrolled ? 'var(--secondary)' : '#fff'} />
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-container ${isOpen ? 'open' : ''}`}>
                <ul style={{ listStyle: 'none', textAlign: 'center' }}>
                    {navLinks.map((link) => (
                        <li key={link.name} style={{ marginBottom: '2rem' }}>
                            <a
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="btn" onClick={() => setIsOpen(false)}>Book Your Stay</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
