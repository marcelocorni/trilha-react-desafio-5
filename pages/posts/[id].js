import { getGlobalData } from '../../utils/global-data';

import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import { getPostById } from '../../utils/mdx-utils';

const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({
  posts,
  globalData,
}) {

  if (posts.length === 0) {
    return (
      <div>Nada</div>
    );
  } else {
    return (
      <>
        {posts.map((item, index) => (
          <Layout key={index}>
            <SEO
              title={`${item?.title} - ${globalData.name}`}
              description={item?.description}
            />
            <Header name={globalData.name} />
            <article className="px-6 md:px-0">
              <header>
                <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
                  {item?.title}
                </h1>
                {item?.description && (
                  <p className="text-xl mb-4">{item?.description}</p>
                )}
              </header>
              <main>
                <article className="prose dark:prose-dark">
                  {item.body}
                </article>
              </main>
            </article>
            <Footer copyrightText={globalData.footerText} />
            <GradientBackground
              variant="large"
              className="absolute -top-32 opacity-30 dark:opacity-50"
            />
          </Layout>
        ))}
      </>
    );
  }
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostById(params.id);

  return {
    props: {
      globalData,
      posts,
    },
  };
};

