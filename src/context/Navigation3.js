import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider ({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

//this is used when user goes to back and forward, it will set the currentPath when user press back and forward; and it is only works if link is set by pushState event
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);
        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

// this is navigation update the path; 'to' is where user want to go which is set when call navigate fun; this is pushState syntex to update the path inside address bar and we need to set currentPath bcoz pushState does not trigger popstate
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {/* <button onClick={() => navigate('/accordion')}>Accordion</button>
            <button onClick={() => navigate('/dropdown')}>Dropdown</button>
            <button onClick={() => navigate('/button')}>Button</button> 
            { currentPath } */}
            { children }
        </NavigationContext.Provider>
    );
}

export { NavigationProvider }
export default NavigationContext;