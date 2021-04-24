import React from "react";

import { createContext } from 'react';

import { ThemeProvider } from './theme';

interface Props { 
	children: React.ReactNode;
	value: any;
}

export const StagContext = createContext<Props['value']>(null);

export const StagProvider = ({ children, value }: Props) => {
	return(
		<StagContext.Provider value={value}>
			<ThemeProvider value={value.theme}>
				{children}
			</ThemeProvider>
		</StagContext.Provider>
	);
};