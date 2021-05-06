import React, { useState } from 'react';

import { AriaCommon } from '../../lib';
import { SizeProps, StagComponentProps } from '../../lib/Common';

const ComponentName = 'Box';

export type BoxProps<T = HTMLDivElement> = {
	align?: 'left' | 'right' | 'center';
	size?: SizeProps;
} & StagComponentProps<T>;

const BoxStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column'
};

export const Box = (props: BoxProps) => {

	const style: React.CSSProperties = {
		...BoxStyle,
		justifyContent: props.align,
		width: props.size?.width,
		height: props.size?.height,
		...props._css
	};

	const aria: AriaCommon = {
		...props.aria
	};

	return (
		<div  {...aria} style={style}
			className={props.class ? props.class : ComponentName}>
			{props.children}
		</div>
	);
};

Box.displayName = ComponentName;