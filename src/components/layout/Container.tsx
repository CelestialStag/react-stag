import React from 'react';

import { AriaCommon } from '../../lib';
import { Box, BoxProps } from '../core/Box';

const ComponentName = 'Container';

type ContainerProps = {
	centerContent?: boolean;
} & BoxProps;

const ContainerStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	marginTop: 0,
	marginBottom: 0,
	marginLeft: 'auto',
	marginRight: 'auto'
};

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
	
	const style: React.CSSProperties = {
		...ContainerStyle,
		...props._css
	};

	const aria: AriaCommon = {
		...props.aria
	};

	return (
		<Box {...aria} _css={style} class={'className'}>
			{props.children}
		</Box>
	);
};

Container.displayName = ComponentName;