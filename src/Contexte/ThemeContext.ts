import { Dispatch, SetStateAction, createContext } from "react"; // Importing necessary types and functions from react

// Defining the type for the context
type ThemeContextType = {
    darkTheme: boolean; // Boolean indicating if dark theme is enabled
    setDarkTheme: Dispatch<SetStateAction<boolean>>; // Function to toggle the dark theme
}

// Creating the context with a default value
const ThemeContext = createContext<ThemeContextType>({
    darkTheme: false, // Default value for dark theme is false
    setDarkTheme: () => null, // Default function does nothing
});

export default ThemeContext; // Exporting the context as the default export
