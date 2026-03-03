import React, { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './GalleryStyles.css';

const Gallery = () => {
    const addToRefs = useScrollReveal();

    const images = [
        { src: "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767681879/5_npdqse.jpg", alt: "Property View", category: "Room" },
        { src: "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767681879/3_yumc0s.jpg", alt: "Bedroom Interior", category: "Room" },
        { src: "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767681881/4_dqoyvq.jpg", alt: "Cozy Space", category: "Room" },
        { src: "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767681879/2_u0posh.jpg", alt: "Living Area", category: "Room" },
        { src: "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767631327/WhatsApp_Image_2025-10-06_at_14.53.48_0f252e69_gxztkl.jpg", alt: "Storage & Wardrobe", category: "Inventories" },
        { src: "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767681879/1_bnrunw.jpg", alt: "Room Detail", category: "Room" },
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = ["All", ...new Set(images.map(img => img.category))];
        return cats;
    }, [images]);

    // Filter images
    const filteredImages = useMemo(() => {
        if (activeCategory === "All") return images;
        return images.filter(img => img.category === activeCategory);
    }, [activeCategory, images]);

    return (
        <section id="gallery" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <span ref={addToRefs} className="section-subtitle reveal">Visual Tour</span>
                <h2 ref={addToRefs} className="section-title reveal delay-200">Explore Our Space</h2>

                {/* Filter Buttons */}
                <div ref={addToRefs} className="filter-container reveal delay-300">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                }}>
                    {filteredImages.map((img, index) => (
                        <div
                            key={`${activeCategory}-${index}`} // Force re-render for animation reset
                            ref={addToRefs}
                            className="gallery-card animate-card reveal-zoom"
                            style={{ transitionDelay: `${index * 0.1}s`, height: '280px' }}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img src={img.src} alt={img.alt} loading="lazy" />

                            <div className="gallery-overlay">
                                <div className="gallery-overlay-text">
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#ffd700', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {img.category}
                                    </span>
                                    {img.alt}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.95)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    backdropFilter: 'blur(5px)'
                }} onClick={() => setSelectedImage(null)}>
                    <button
                        style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', cursor: 'pointer', color: 'white', transition: 'transform 0.3s' }}
                        onClick={() => setSelectedImage(null)}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                        aria-label="Close lightbox"
                    >
                        <X size={40} />
                    </button>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '4px', boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;
