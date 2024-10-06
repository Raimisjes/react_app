import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
    const [localStorageValue, setLocalStorage] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : [];
    });

    useEffect(() => {
        if (localStorageValue.length > 0) {
            localStorage.setItem(key, JSON.stringify(localStorageValue));
        } else {
            localStorage.removeItem(key);
        }
    }, [localStorageValue, key]);

    return { localStorageValue, setLocalStorage };
};

export default useLocalStorage;
