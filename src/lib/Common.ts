import React from "react";
import { AriaCommon } from "./a11y";

export interface SizeProps {
	width: string;
	heigth: string;
}

export interface StagStyle<T> {
	_css?: React.StyleHTMLAttributes<T>,
	colors?: {
		'primary'?: string;
		'secondary'?: string;
		'tertiary'?: string;
		'background'?: string;
		'accent-1'?: string;
		'accent-2'?: string;
	}
}

export interface CommonProps<T = HTMLDivElement> extends CommonActions<T> {
	children?: React.ReactNode;
	aria?: AriaCommon;
	class?: string;
	style?: StagStyle<T>;
}

export interface CommonActions<T> {
	onClick?: (event: React.MouseEvent<T, MouseEvent>) => void
}