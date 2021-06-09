import React from 'react';

import { AriaCommon } from './a11y';

export type StagTheme = {
	'primary'?: string;
	'secondary'?: string;
	'tertiary'?: string;
	'background'?: string;
	'accent-1'?: string;
	'accent-2'?: string;
};

export type CommonActions<T>  = {
	onClick?: (event: React.MouseEvent<T, MouseEvent>) => void;
};

export type TextProps = {
	color?: string;
	'text-size'?: string;
};

export type DisplayProps = {
	background?: {
		color: string;
		style: string;
	};
	border?: {
		color: string;
		width: number;
		radius: [4];
	};
};

export type CommonProps<T = HTMLDivElement> =  {
	children?: React.ReactNode;
	aria?: AriaCommon;
	class?: string;
	theme?: StagTheme;
	style?: React.CSSProperties;
} & CommonActions<T>;