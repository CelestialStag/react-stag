import { NextPage } from 'next';
import React from 'react';

import { Container, Span } from 'react-stag';

// interface Props { }

const IndexPage: NextPage<never> = () => {
	return (
		<div>
			<Span>
				I am a span!
			</Span>
			<Container aria={{ 'aria-label': 'container' }}>
				I am a container!
			</Container>
		</div>
	);
};

export default IndexPage;
