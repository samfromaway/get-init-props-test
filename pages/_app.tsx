import type { AppContext, AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps.menu);
  console.error('test2');

  return (
    <>
      <div style={{ display: 'flex' }}>
        {pageProps.menu.map((e: any) => (
          <h3 key={e.id}>{e.item}</h3>
        ))}
      </div>
      <Component {...pageProps} />
    </>
  );
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  await delay(5000);
  const res = await fetch('https://62453f937701ec8f724f2890.mockapi.io/menu');
  const menu = await res.json();

  return {
    pageProps: {
      ...pageProps,
      menu,
    },
  };
};

export default MyApp;
