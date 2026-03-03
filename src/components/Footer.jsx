import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const Footer = () => {
    const addToRefs = useScrollReveal();

    return (
        <footer id="contact" style={{ backgroundColor: '#111', color: '#fff', paddingTop: '80px', paddingBottom: '20px' }}>
            <div className="container">
                <div className="grid-2" style={{ gap: '4rem' }}>

                    {/* Contact & Info */}
                    <div ref={addToRefs} className="reveal delay-100">
                        <h2 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '2.5rem' }}>VPM Homestay</h2>
                        <p style={{ color: '#aaa', marginBottom: '2rem' }}>
                            Experience the comfort of home in the heart of Coimbatore.
                            Contact us directly for the best rates and availability.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="https://wa.me/919003584476" target="_blank" rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    backgroundColor: '#25D366',
                                    borderColor: '#842234',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    width: 'fit-content'
                                }}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat on WhatsApp
                            </a>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <MapPin color="var(--primary)" size={24} style={{ marginTop: '5px' }} />
                                <div>
                                    <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Address</h3>
                                    <p style={{ color: '#aaa' }}>Near Domino’s Pizza, Peelamedu, Coimbatore – 641004</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div ref={addToRefs} className="reveal delay-200" style={{ borderRadius: '20px', overflow: 'hidden', height: '350px' }}>
                        {/* Using a Google Maps Search Embed for VPM Homestay Coimbatore */}
                        <iframe
                            title="VPM Homestay Location Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="eager"
                            allowFullScreen
                            src="https://maps.google.com/maps?q=VPM+Homestay+Peelamedu+Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>

                <div style={{ marginTop: '50px', paddingTop: '25px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', color: '#888', fontSize: '0.95rem' }}>
                    <p>&copy; {new Date().getFullYear()} VPM Homestay. All rights reserved.</p>
                    <a
                        href="https://oneframe-media.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#ccc',
                            textDecoration: 'none',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}
                    >
                        Hosted by <span style={{ color: '#fff', fontWeight: '700', letterSpacing: '0.5px' }}>One Frame</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
