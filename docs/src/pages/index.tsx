import React from 'react';
import { GetServerSidePropsResult, NextPage } from 'next';

interface Props {
	text: string;
}

const Index: NextPage<Props> = (props: Props) => {
	return(
		<div>
			{props.text}
		</div>
	);
};

export const getServerSideProps = async (): Promise<GetServerSidePropsResult<Props>> => {
	return {
		props: {
			text: '@stagcss/react'
		}
	};
};

export default Index;
