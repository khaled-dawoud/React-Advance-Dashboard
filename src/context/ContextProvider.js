import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const handelClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    const handelClose = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: false })
    }

    const [screenSize, setScreenSize] = useState(undefined);
    const [themeSettings, setThemeSettings] = useState(false);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('light');

    const setMode = e => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(!themeSettings);
    };

    const setColor = color => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(!themeSettings);
    };
    
    return (
        <StateContext.Provider value={
            {
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handelClick,
                screenSize, 
                setScreenSize,
                themeSettings,
                setThemeSettings,
                currentColor,
                setCurrentColor,
                currentMode,
                setCurrentMode,
                setMode,
                setColor,
                handelClose
            }
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);