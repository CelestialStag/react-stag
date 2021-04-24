import React from 'react';

import { createContext } from 'react';

type Props = { 
	children: React.ReactNode;
	value: any;
};

export const ThemeContext = createContext<Props['value']>(null);

export const ThemeProvider = ({ children, value }: Props) => {
	return(
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};