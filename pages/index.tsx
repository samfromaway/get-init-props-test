import type { NextPage } from 'next';

export async function getStaticProps() {
  const res = await fetch('https://62453f937701ec8f724f2890.mockapi.io/tag');
  const data = await res.json();

  return { props: { data: data }, revalidate: 30 };
}

const Home: NextPage = ({ data }: any) => {
  return (
    <div>
      {data.map((e: any) => (
        <h3 key={e.id}>{e.name}</h3>
      ))}
    </div>
  );
};

export default Home;
