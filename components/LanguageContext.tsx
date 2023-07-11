import { createContext, Dispatch, SetStateAction } from 'react';

// Define an interface for our context state
interface ILanguageContext {
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
}

// Create the context with default values
// Default values are only used if the context provider is not found
export const LanguageContext = createContext<ILanguageContext>({
  currentLanguage: 'TH',
  setCurrentLanguage: () => {},
});