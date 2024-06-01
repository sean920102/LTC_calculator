import React, { useState, createContext, useContext } from "react";

type Burden = "一般戶" | "中低收入戶" | "低收入戶";
type Limit = "有外籍看護" | "有特別津貼" | "無";

interface I_LTCTypeContext {
  level: string;
  burden: Burden;
  limit: Limit;
}
const LTCTypeContext = createContext<I_LTCTypeContext | undefined>(undefined);
// 定義一個自訂 hook，讓組件可以訪問 ThemeContext
export const useLTCType = (): I_LTCTypeContext => {
  const context = useContext(LTCTypeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface I_LTCTypeProvider {
  children: React.ReactNode;
}
// 定義一個 Provider，它將提供主題給應用的所有組件
export const LTCTypeProvider: React.FC<I_LTCTypeProvider> = ({ children }) => {
  const [burden, setBurden] = useState<Burden>("一般戶");
  const [level, setlevel] = useState<string>("2級");
  const [limit, setLimit] = useState<Limit>("無");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  return (
    <LTCTypeContext.Provider value={{ level, burden, limit }}>
      {children}
    </LTCTypeContext.Provider>
  );
};
