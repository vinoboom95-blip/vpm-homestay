import React from 'react';
import { Clock, Plane, MapPin, Stethoscope, Utensils, Heart, CheckCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './AboutStyles.css';

const About = () => {
    const addToRefs = useScrollReveal();

    const highlights = [
        { icon: <Clock size={32} />, text: '20 mins to Railway Station' },
        { icon: <Plane size={32} />, text: '7 mins to Airport' },
        { icon: <MapPin size={32} />, text: '2 mins to Krishnamal & PSG Tech' },
        { icon: <Stethoscope size={32} />, text: '5 mins to PSG Hospital' },
        { icon: <Utensils size={32} />, text: 'Easy access to Food & Shopping' },
    ];

    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-off-white)' }}>
            <div className="container">
                <div className="grid-2">
                    {/* Text Content */}
                    <div className="about-text-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span ref={addToRefs} className="section-subtitle reveal" style={{ textAlign: 'left', marginBottom: '1rem' }}>About This Space</span>
                        <h2 ref={addToRefs} className="about-title reveal delay-100" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                            A Warm & Private Stay
                        </h2>
                        <p ref={addToRefs} className="reveal delay-200" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            Welcome to our warm and comfortable home in Coimbatore. We offer a private room perfect for solo travelers, couples, or business guests seeking a peaceful stay with modern essentials.
                        </p>

                        <div ref={addToRefs} className="glass property-details-card reveal delay-300" style={{ padding: '25px', borderRadius: '16px', borderColor: 'var(--primary)' }}>
                            <h3 style={{ marginBottom: '15px', color: 'var(--primary-dark)', fontSize: '1.2rem' }}>Property Details</h3>
                            <ul style={{ listStyle: 'none', color: 'var(--text-main)', display: 'grid', gap: '10px' }}>
                                <li className="flex-between">
                                    <span style={{ color: 'var(--text-light)' }}>Type:</span>
                                    <strong>Home Stay</strong>
                                </li>
                                <li className="flex-between">
                                    <span style={{ color: 'var(--text-light)' }}>Check-in:</span>
                                    <strong>10:00 AM</strong>
                                </li>
                                <li className="flex-between">
                                    <span style={{ color: 'var(--text-light)' }}>Check-out:</span>
                                    <strong>09:00 AM</strong>
                                </li>
                                <li className="flex-between">
                                    <span style={{ color: 'var(--text-light)' }}>Guest Capacity:</span>
                                    <strong>Up to 3 Guests</strong>
                                </li>
                            </ul>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                                {/* Free Cancellation Highlight */}
                                <div style={{
                                    backgroundColor: '#e6f4ea',
                                    borderRadius: '12px',
                                    padding: '12px 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    borderLeft: '5px solid #1e7e34',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                                }}>
                                    <CheckCircle size={24} color="#1e7e34" />
                                    <span style={{ color: '#134e20', fontWeight: '700', fontSize: '1rem', width: '100%', textAlign: 'right' }}>
                                        Free Cancellation Available
                                    </span>
                                </div>

                                {/* Fresh Meals Highlight */}
                                <div style={{
                                    backgroundColor: '#fff7e6',
                                    borderRadius: '12px',
                                    padding: '12px 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    borderLeft: '5px solid #d97706',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                                }}>
                                    <Utensils size={24} color="#d97706" />
                                    <span style={{ color: '#b45309', fontWeight: '700', fontSize: '1rem', width: '100%', textAlign: 'right' }}>
                                        Fresh Homemade Meals Available at Extra Cost
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Location Highlights */}
                    <div>
                        <h3 ref={addToRefs} className="section-title reveal" style={{ marginBottom: '2rem', fontSize: '1.8rem', textAlign: 'center' }}>Location Highlights</h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {highlights.map((item, index) => (
                                <div key={index} ref={addToRefs} className={`highlight-card reveal delay-${(index % 4 + 1) * 100}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    backgroundColor: 'white',
                                    padding: '15px 25px',
                                    borderRadius: '12px',
                                }}>
                                    <div style={{ color: 'var(--primary)' }}>
                                        {item.icon}
                                    </div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
