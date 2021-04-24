import React from "react";

import { CommonProps } from '../../lib/Common';

interface Props extends CommonProps {
	children: React.ReactNode;
};

export const Container = React.forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
	console.log(props);
	console.log(ref);
	
	return (
		<div>
			{props.children}
		</div>
	);
});