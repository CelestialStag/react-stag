import React from "react";

import { AriaCommon } from "src/lib/a11y";
import { CommonProps } from '../../lib/Common';

export interface DivProps<T = HTMLDivElement> extends CommonProps<T>  {
	align?: 'left' | 'right' | 'center';
	size?: string;
}

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