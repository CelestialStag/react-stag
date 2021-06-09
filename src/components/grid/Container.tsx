import React from 'react';

import { AriaCommon } from '../../lib';
import { Box, BoxProps } from '../base/Box';

export type ContainerProps = BoxProps;

export const Container = React.forwardRef((props: ContainerProps, ref: React.Ref<HTMLDivElement>) => {

	const style: React.CSSProperties = {
		...props.style
	};

	const aria: AriaCommon = {
		...props.aria
	};

	return (
		<Box ref={ref} {...aria} {...props}
			class='container'
			style={style}>
			{props.children}
		</Box>
	);
});

Container.displayName = 'Container';