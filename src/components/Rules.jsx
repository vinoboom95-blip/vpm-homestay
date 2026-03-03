import React from 'react';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './RulesStyles.css';

const Rules = () => {
    const addToRefs = useScrollReveal();

    return (
        <section id="rules" className="section" style={{ backgroundColor: 'var(--bg-off-white)' }}>
            <div className="container">
                <h2 ref={addToRefs} className="section-title reveal">House Rules & Policies</h2>

                <div className="grid-2" style={{ alignItems: 'start' }}>
                    {/* Times */}
                    <div ref={addToRefs} className="rules-left-card reveal-left delay-100" style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '40px', borderRadius: '20px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px', marginBottom: '20px', color: '#fff' }}>Check-in & Check-out</h3>
                        <div className="time-block" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                            <Clock size={24} color="var(--primary)" />
                            <div>
                                <strong style={{ display: 'block' }}>Check-in</strong>
                                <span>11:00 AM – 8:00 PM</span>
                            </div>
                        </div>
                        <div className="time-block" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Clock size={24} color="var(--primary)" />
                            <div>
                                <strong style={{ display: 'block' }}>Check-out</strong>
                                <span>Before 10:00 AM</span>
                            </div>
                        </div>
                    </div>

                    {/* Rules List */}
                    <div ref={addToRefs} className="rules-right-card reveal-right delay-200" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ marginBottom: '20px' }}>Things to Note</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li className="flex-center rule-item" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                                <CheckCircle size={20} color="var(--primary)" /> Max 3 guests allowed
                            </li>
                            <li className="flex-center rule-item" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                                <AlertCircle size={20} color="#ef4444" /> No pets allowed
                            </li>
                            <li className="flex-center rule-item" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                                <AlertCircle size={20} color="#ef4444" /> No parties or events
                            </li>
                            <li className="flex-center rule-item" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                                <AlertCircle size={20} color="#ef4444" /> NO smoking
                            </li>
                            <li className="flex-center rule-item" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                                <AlertCircle size={20} color="#ef4444" /> NO Alcohol
                            </li>
                            <li className="flex-center rule-item" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                                <CheckCircle size={20} color="var(--primary)" /> Quiet hours: 8:00 PM – 7:00 AM
                            </li>
                            <li className="flex-center rule-item" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                                <CheckCircle size={20} color="var(--primary)" /> Gates locked by 10:00 PM
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rules;
