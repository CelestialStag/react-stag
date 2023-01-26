import { PageContext } from '@ssr/vite-react';

import { StagProvider } from '@stag/hooks';

import { PageContextProvider } from '../hooks';
// import './PageShell.scss';

export type PageShellProps = {
  children: React.ReactNode;
  pageContext: PageContext;
};

export const PageShell: React.FC<PageShellProps> = ({ children, pageContext }: PageShellProps) => {
  return (
    <PageContextProvider pageContext={pageContext}>
      <StagProvider>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </StagProvider>
    </PageContextProvider>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ display: 'flex' }}>{children}</div>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
