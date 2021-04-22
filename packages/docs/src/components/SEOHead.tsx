import { NextPage } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';

interface Props {
	seo?: NextSeoProps;
}

export const SEOHead: NextPage<Props> = (props: Props) => {
	const seo = {
		/** default configuration */
		/** overwrite default configuration */
		...props.seo
	};
	return(
		<NextSeo
			title={seo.title}
			description={seo.description}
			openGraph={seo.openGraph}
			twitter={seo.twitter} >
		</NextSeo>
	);
};