// useRezize hook to finde if window size was changed
// and call callback function
// Usage: useResize(() => {console.log('resized')});

import { useState, useEffect } from 'react';

const useResize = (callback: Function) => {

    useEffect(() => {
        const handleResize = () => {
            callback();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

};

export default useResize;