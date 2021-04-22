import { NextSeoProps } from 'next-seo/lib/types';
import React from 'react';

import { NavBar } from '../components/NavBar';
import { SEOHead } from '../components/SEOHead';

interface Props { 
	seo?: NextSeoProps;
	children: React.ReactNode;
}

export const DefaultLayout: React.FunctionComponent<Props> = (props: Props) => {
	return(
		<div>
			<SEOHead seo={props.seo} />
			<NavBar />
			{props.children}
		</div>
	);
};