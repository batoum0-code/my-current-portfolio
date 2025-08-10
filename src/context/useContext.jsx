import { createContext, useContext, useState } from 'react';

// 1. Create context
const PageContext = createContext();

// 2. Create provider
export const PageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('Home'); // default value
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage, menuOpen, setMenuOpen }}>
            {children}
        </PageContext.Provider>
    );
};



// 3. Custom hook for easier usage
export const usePage = () => useContext(PageContext);
