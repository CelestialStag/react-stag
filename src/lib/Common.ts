import React from 'react';

import { AriaCommon } from '.';

/** style for stag 'div' */
export type SizeProps = {
	width: string;
	height: string;
}; // type SizeProps

export type FontProps = {
	/** style for stag 'span' */
	color?: string;
	size?: string;
}; //  type FontProps

export type StagThemeProps = {
	colors?: {
		primary?: string;
		secondary?: string;
		tertiary?: string;
		background?: string;
		'accent-1'?: string;
		'accent-2'?: string;
	};
};

type CommonActions<T>  = {
	onClick?: (event: React.MouseEvent<T, MouseEvent>) => void;
}; // type CommonActions

type CommonProps = {
	children?: React.ReactNode;
	aria?: AriaCommon;
	class?: string;
	style?: StagThemeProps;
	_css?: React.CSSProperties;
}; // type CommonProps

export type StagComponentProps<T = HTMLDivElement> =  {
} & CommonActions<T> & CommonProps; // type StagComponentProps