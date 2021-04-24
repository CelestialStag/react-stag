import React from 'react';

import { AriaCommon } from '../../lib';
import { CommonProps } from '../../lib/Common';

type DivProps<T = HTMLDivElement> = {
	align?: 'left' | 'right' | 'center';
	size?: string;
} & CommonProps<T>;

export const Box = React.forwardRef((props: DivProps, ref: React.Ref<HTMLDivElement>) => {
	
	const style: React.StyleHTMLAttributes<HTMLSpanElement> = {
		...props.style?._css
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

Box.displayName = 'Box';