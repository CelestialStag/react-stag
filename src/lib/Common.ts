import { AriaCommon } from './a11y';
import React from 'react';

export type SizeProps = {
	width: string;
	heigth: string;
};

export type TextProps = {
	color?: string;
	'text-size'?: string;
};

export type StagStyle<T> = {
	_css?: React.StyleHTMLAttributes<T>;
	colors?: {
		'primary'?: string;
		'secondary'?: string;
		'tertiary'?: string;
		'background'?: string;
		'accent-1'?: string;
		'accent-2'?: string;
	};
};

export type CommonActions<T>  = {
	onClick?: (event: React.MouseEvent<T, MouseEvent>) => void;
};

export type CommonProps<T = HTMLDivElement> =  {
	children?: React.ReactNode;
	aria?: AriaCommon;
	class?: string;
	style?: StagStyle<T>;
} & CommonActions<T>;