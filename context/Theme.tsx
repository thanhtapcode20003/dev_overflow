"use client";

import {
  ThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from "next-themes";

import React from "react";

const ThemeProvider = ({ children, ...prop }: ThemeProviderProps) => {
  return <NextThemesProvider {...prop}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
