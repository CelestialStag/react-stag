import React from "react";

import { AriaCommon } from "src/lib/a11y";
import { CommonProps, StagStyle } from '../../lib/Common';
import { Box } from "../base/Box";

interface ContainerProps extends CommonProps<HTMLDivElement> {
	centerContent?: boolean;
}

export const Container = React.forwardRef((props: ContainerProps, ref: React.Ref<HTMLDivElement>) => {

	const style: StagStyle<HTMLSpanElement> = {
		_css: props.style?._css
	};

	const aria: AriaCommon = {
		...props.aria
	};

	return (
		<Box ref={ref} {...aria}
			class='container'
			style={style}>
			{props.children}
		</Box>
	);
});