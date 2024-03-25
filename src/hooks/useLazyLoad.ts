import { useEffect, useRef, useState } from 'react';

const useLazyLoad = (threshold = 0.2) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const [intersectingIds, setIntersectingIds] = useState<number[]>([]);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                const newIds: number[] = entries
                    .filter((entry) => entry.isIntersecting)
                    .map((entry) =>
                        Number(entry.target.getAttribute('data-id')),
                    );

                setIntersectingIds((prevIds) => {
                    const uniqueNewIds = newIds.filter(
                        (id) => !prevIds.includes(id),
                    );
                    return [...prevIds, ...uniqueNewIds];
                });
            },
            { threshold },
        );

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [threshold]);

    return {
        observer,
        intersectingIds,
    };
};

export default useLazyLoad;
