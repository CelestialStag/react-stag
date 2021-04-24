import React from "react";

import { AriaCommon, CommonProps } from '../../lib';

interface Props extends CommonProps <HTMLSpanElement> {
	color: string;
}

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