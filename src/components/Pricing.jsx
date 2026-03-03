import React from 'react';
import { Calendar, Tag, Check, MessageCircle, Wifi, Car, Shield, Bath } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './PricingStyles.css';

const Pricing = () => {
    const addToRefs = useScrollReveal();

    return (
        <section id="availability" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <span ref={addToRefs} className="section-subtitle reveal">Rates & Booking</span>
                <h2 ref={addToRefs} className="section-title reveal delay-100">Pricing & Availability</h2>

                <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
                    <div ref={addToRefs} className="glass pricing-card reveal-zoom delay-200" style={{
                        padding: '40px',
                        borderRadius: '24px',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        backgroundColor: '#fff'
                    }}>
                        <div className="flex-between" style={{ paddingBottom: '20px', borderBottom: '1px solid #eee', alignItems: 'flex-start' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Standard Private Room</h3>
                                <p style={{ color: 'var(--text-light)' }}>Ground floor, Kingsize bed, Private bath</p>
                            </div>
                        </div>

                        <div style={{ padding: '30px 0' }}>
                            <h4 style={{ marginBottom: '15px' }}>What's Included</h4>
                            <div className="grid-2">
                                <div className="inclusion-item" style={{ display: 'flex', gap: '10px' }}>
                                    <Wifi size={20} color="var(--primary)" /> Wi-Fi & AC
                                </div>
                                <div className="inclusion-item" style={{ display: 'flex', gap: '10px' }}>
                                    <Car size={20} color="var(--primary)" /> Private Parking
                                </div>
                                <div className="inclusion-item" style={{ display: 'flex', gap: '10px' }}>
                                    <Shield size={20} color="var(--primary)" /> Daily Housekeeping
                                </div>
                                <div className="inclusion-item" style={{ display: 'flex', gap: '10px' }}>
                                    <Bath size={20} color="var(--primary)" /> Toiletries & Towels
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                            <a href="https://wa.me/919003584476?text=Hello,%20I%20would%20like%20to%20check%20availability%20at%20VPM%20Homestay."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn pricing-btn btn-shimmer"
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}>
                                <MessageCircle size={22} />
                                Contact Property for Rates & Availability
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
