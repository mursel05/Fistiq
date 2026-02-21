"use client";
import { client } from "@/utils/apollo";
import { ApolloProvider } from "@apollo/client/react";
import { createContext } from "react";
import { ReactNode } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <DataContext.Provider value={{}}>{children}</DataContext.Provider>
    </ApolloProvider>
  );
};
