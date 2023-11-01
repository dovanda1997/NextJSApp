"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as Provider } from "@chakra-ui/react";

export default function ChakraProvider({ children }) {
  return (
    <CacheProvider>
      <Provider>{children}</Provider>
    </CacheProvider>
  );
}
