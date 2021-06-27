import React from 'react';

import { Container, Heading } from 'react-stag';

const IndexPage = () => {
	return (
		<Container justify='left'>
			<Heading size='h1' >
				This is a heading (H1)
			</Heading>
			<Heading size='h2'>
				This is a heading (H2)
			</Heading>
			<Heading size='h3'>
				This is a heading (H3)
			</Heading>
			<Heading size='h4'>
				This is a heading (H4)
			</Heading>
			<Heading size='h5'>
				This is a heading (H5)
			</Heading>
			<Heading size='h6'>
				This is a heading (H6)
			</Heading>
		</Container>
	);
};

export default IndexPage;
