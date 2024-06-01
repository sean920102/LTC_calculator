import React, { createContext, useContext, useState } from "react";

// 定義主題類型
type Theme = "light" | "dark";

// 定義 Context 類型
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 創建一個新的 Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface I_ThemeProvider {
  children: React.ReactNode;
}

// 定義一個 Provider，它將提供主題給應用的所有組件
const ThemeProvider: React.FC<I_ThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light"); // 預設主題為 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 定義一個自訂 hook，讓組件可以訪問 ThemeContext
const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// 使用 Context 的範例組件
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

// const ThemedComponent: React.FC = () => {
//   const { theme } = useTheme();

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "#fff" : "#333",
//         color: theme === "light" ? "#333" : "#fff",
//       }}
//     >
//       Themed Component
//     </div>
//   );
// };

// 主要應用程式組件
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>React Context Example</h1>
        {/* <ThemeToggle /> */}
        {/* <ThemedComponent /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
