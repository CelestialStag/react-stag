import React from "react";

import { CommonProps } from '../../lib/Common';

interface Props extends CommonProps {

};

export const Div = React.forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
	console.log(props);
	console.log(ref);
	
	return (
		<div>
			
		</div>
	);
});