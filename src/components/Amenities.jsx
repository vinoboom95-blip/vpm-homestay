import React from 'react';
import {
    Wifi, Car, Tv, Wind, Coffee, Shield, Key, Sun, Droplet, Briefcase,
    Bed, Bath, Shirt, Utensils, Video, Lock, Moon, SunMedium, Monitor
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './AmenitiesStyles.css';

const Amenities = () => {
    const addToRefs = useScrollReveal();

    const categories = [
        {
            title: "Bedroom & Bathroom",
            amenities: [
                { icon: <Bed size={18} />, label: "King/Queen Bed" },
                { icon: <Moon size={18} />, label: "Extra Pillows & Blankets" },
                { icon: <Droplet size={18} />, label: "Hot Water" },
                { icon: <Shirt size={18} />, label: "Washing Machine" },
                { icon: <Briefcase size={18} />, label: "Wardrobe Storage" },
                { icon: <Bath size={18} />, label: "Towels & Linens" }
            ]
        },
        {
            title: "Comfort & Work",
            amenities: [
                { icon: <Wifi size={18} />, label: "High-speed Wi-Fi" },
                { icon: <Monitor size={18} />, label: "Dedicated Workspace" },
                { icon: <Wind size={18} />, label: "Ceiling Fan" },
                { icon: <Moon size={18} />, label: "Room-darkening Blinds" },
                { icon: <Shirt size={18} />, label: "Iron & Drying Rack" }
            ]
        },
        {
            title: "Entertainment & Relax",
            amenities: [
                { icon: <Tv size={18} />, label: "TV" },
                { icon: <Utensils size={18} />, label: "Common Dining Area" },
                { icon: <SunMedium size={18} />, label: "Open Terrace" }
            ]
        },
        {
            title: "Services & Safety",
            amenities: [
                { icon: <Car size={18} />, label: "Free Parking" },
                { icon: <Key size={18} />, label: "Self Check-in (Lockbox)" },
                { icon: <Video size={18} />, label: "CCTV Surveillance" },
                { icon: <Lock size={18} />, label: "Secure Premises" }
            ]
        }
    ];

    return (
        <section id="amenities" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <span ref={addToRefs} className="section-subtitle reveal">What This Place Offers</span>
                <h2 ref={addToRefs} className="section-title reveal delay-200">Premium Amenities</h2>

                <div className="grid-2" style={{ marginTop: '3rem' }}>
                    {categories.map((cat, idx) => (
                        <div key={idx} ref={addToRefs} className={`glass amenity-card reveal-zoom delay-${(idx % 4) * 100}`} style={{
                            padding: '30px',
                            borderRadius: '20px',
                            border: '1px solid #eee',
                            backgroundColor: '#fff',
                            boxShadow: 'var(--shadow-md)'
                        }}>
                            <h3 style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '5px' }}>
                                {cat.title}
                            </h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                                {cat.amenities.map((item, i) => (
                                    <li key={i} className="amenity-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: '#555' }}>
                                        <div className="amenity-icon-wrapper" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
                                            {item.icon}
                                        </div>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
