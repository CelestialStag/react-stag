import React from 'react';

import { AriaCommon } from '../../lib';
import { CommonProps, DisplayProps, TextProps } from '../../lib/Common';

export  type SpanProps<T = HTMLSpanElement> = {
} & CommonProps<T> & TextProps & DisplayProps;

export const Span = React.forwardRef((props: SpanProps, ref: React.Ref<HTMLSpanElement>) => {
	
	const style: React.CSSProperties = {
		...props.style
	};

	const aria: AriaCommon = {
		...props.aria
	};

	return (
		<span ref={ref} {...aria}
			className={props.class ? props.class : undefined}
			style={style}>
			{props.children}
		</span>
	);
});

Span.displayName = 'Span';