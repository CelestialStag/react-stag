import React from 'react';

import { AriaCommon } from '../../lib';
import { CommonProps, DisplayProps, TextProps } from '../../lib/Common';

export  type BoxProps<T = HTMLDivElement> = {
	justify?: 'left' | 'right' | 'center';
	align?: 'left' | 'right' | 'center';
} & CommonProps<T> & TextProps & DisplayProps;

export const Box = React.forwardRef((props: BoxProps, ref: React.Ref<HTMLDivElement>) => {
	
	const style: React.CSSProperties = {
		justifyContent: props.justify,
		textAlign: props.justify,
		...props.style
	};

	const aria: AriaCommon = {
		...props.aria
	};

	return (
		<div ref={ref} {...aria}
			className={props.class ? props.class : undefined}
			style={style}>
			{props.children}
		</div>
	);
});

Box.displayName = 'Heading';