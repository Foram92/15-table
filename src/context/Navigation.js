import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider ({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
//when user clicks back and forward in links created by pushState, the popstate will out and here when popstate is occurs we call handler fun so it will setCurrnentPath
        window.addEventListener('popstate', handler);

//must remove eventlistener when set addEventlistener
        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    return (
        <NavigationContext.Provider value={{}}>
            { currentPath }
            { children }
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;