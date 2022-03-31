import type { AppContext, AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps.menu);

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

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  const res = await fetch('https://62453f937701ec8f724f2890.mockapi.io/menu');
  const menu = await res.json();
  console.log(menu);

  return {
    pageProps: {
      ...pageProps,
      menu,
    },
  };
};

export default MyApp;
