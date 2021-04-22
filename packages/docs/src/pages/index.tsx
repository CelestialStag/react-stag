import { NextPage } from 'next';
import React from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout';

import { Container } from '@stagcss/react/src/index';

interface Props { }

const Index: NextPage<Props> = () => {
	return(
		<DefaultLayout>
			<Container>
				body
			</Container>
		</DefaultLayout>
	);
};

export default Index;
