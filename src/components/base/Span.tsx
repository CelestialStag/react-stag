import React from 'react';

import { AriaCommon, CommonProps, TextProps } from '../../lib';

export type Props = CommonProps<HTMLSpanElement> & TextProps;

export const Span = React.forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
	
	const style: React.StyleHTMLAttributes<HTMLSpanElement> = {
		...props.style?._css
	};

	const aria: AriaCommon = {
		...props.aria
	};
	
	return (
		<span ref={ref} {...aria} style={style}>
			{props.children}
		</span>
	);
});

Span.displayName = 'Span';