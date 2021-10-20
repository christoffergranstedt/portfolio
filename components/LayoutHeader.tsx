import Head from 'next/head'

interface LayoutHeaderProps {
  headTitle: string;
  headDescription: string;
  children: React.ReactNode;
}

export const LayoutHeader: React.FC<LayoutHeaderProps> = ({ headTitle, headDescription, children }) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDescription} />      
      </Head>
      {children}
    </>
  )
}
