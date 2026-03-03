import React from 'react';
import { Star } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './ReviewsStyles.css';

const Reviews = () => {
    const addToRefs = useScrollReveal();

    const reviews = [
        {
            name: "John Doe",
            date: "Oct 2024",
            rating: 5,
            text: "Excellent stay! Very clean and the host was extremely helpful. The location is perfect, close to everything but still quiet."
        },
        {
            name: "Sarah Smith",
            date: "Nov 2024",
            rating: 5,
            text: "A home away from home. The room was spotless and the amenities were top notch. Highly recommended for couples."
        },
        {
            name: "Rahul K.",
            date: "Dec 2024",
            rating: 5,
            text: "Great value for money. Safest place to stay in Coimbatore. Near to PSG tech which was my priority."
        },
        {
            name: "Emily R.",
            date: "Dec 2024",
            rating: 5,
            text: "Loved the privacy and the terrace access. Will definitely come back."
        }
    ];

    return (
        <section id="reviews" className="section" style={{ backgroundColor: 'var(--bg-off-white)' }}>
            <div className="container">
                <span ref={addToRefs} className="section-subtitle reveal">Guest Experiences</span>
                <h2 ref={addToRefs} className="section-title reveal delay-100">What Our Guests Say</h2>

                <div ref={addToRefs} className="rating-badge reveal delay-200" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', alignItems: 'center', gap: '15px' }}>
                    <div style={{ fontSize: '4rem', fontWeight: '700', color: 'var(--secondary)', lineHeight: 1 }}>5.0</div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', color: '#fbbf24' }}>
                            {[...Array(5)].map((_, i) => <Star key={i} fill="#fbbf24" size={24} />)}
                        </div>
                        <span style={{ color: 'var(--text-light)' }}>Based on 4 Reviews</span>
                    </div>
                </div>

                <div className="grid-2">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            ref={addToRefs}
                            className={`review-card reveal-zoom delay-${(idx % 2 + 1) * 200} ${idx % 2 === 0 ? 'animate-in-left' : 'animate-in-right'}`}
                        >
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="reviewer-details">
                                    <h4>{review.name}</h4>
                                    <span>{review.date}</span>
                                </div>
                            </div>

                            <div className="star-display" style={{ display: 'flex', color: '#fbbf24', marginBottom: '15px' }}>
                                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="#fbbf24" size={18} />)}
                            </div>

                            <p className="review-text">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
