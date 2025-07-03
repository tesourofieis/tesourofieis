import type React from "react";
import { createContext, useContext } from "react";

const PageContext = createContext(false);

export const PageProvider = ({ children }: { children: React.ReactNode }) => (
  <PageContext.Provider value={true}>{children}</PageContext.Provider>
);

export const useIsNested = () => useContext(PageContext);
