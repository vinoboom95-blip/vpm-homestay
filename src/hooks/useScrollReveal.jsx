import { useEffect, useRef } from 'react';

const useScrollReveal = (options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            if (elementsRef.current) {
                elementsRef.current.forEach((el) => {
                    if (el) observer.unobserve(el);
                });
            }
        };
    }, [options]);

    const addToRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    return addToRefs;
};

export default useScrollReveal;
