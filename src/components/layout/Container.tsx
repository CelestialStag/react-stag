import React from 'react';

import { AriaCommon } from '../../lib';
import { Box } from '../base/Box';
import { CommonProps, StagStyle } from '../../lib/Common';

type ContainerProps = {
	centerContent?: boolean;

} & CommonProps<HTMLDivElement>;

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

Container.displayName = 'Container';