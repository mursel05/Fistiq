"use client";
import { createContext } from "react";
import { ReactNode } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};
