import { useState, useEffect } from 'react';

const useDelay = (Component: any, delay = 5000) => {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(false);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay]);

    return shouldRender ? Component : null;
};

export default useDelay;
