import React from 'react';

import { AriaCommon } from '../../lib';
import { FontProps, StagComponentProps } from '../../lib/Common';

const ComponentName = 'Span';

export type SpanProps<T = HTMLSpanElement> = {
	align?: 'left' | 'right' | 'center';
	'font-style'?: FontProps;
} & StagComponentProps<T>;

const SpanStyle: React.CSSProperties = {
	display: 'inline-block'
};

export const Span = React.forwardRef((props: SpanProps, ref: React.Ref<HTMLSpanElement>) => {
	
	const style: React.CSSProperties = {
		...SpanStyle,
		color: props['font-style']?.color,
		fontSize: props['font-style']?.size,
		...props._css
	};

	const aria: AriaCommon = {
		...props.aria
	};

	return (
		<span ref={ref} {...aria} style={style}
			className={props.class ? props.class : ComponentName}>
			{props.children}
		</span>
	);
});

Span.displayName = ComponentName;