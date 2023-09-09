import Link from 'next/link';
import { useRouter } from 'next/router';
import MetaHead from './components/MetaHead';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  console.log(locale);
  const onRedirect = () => {
    router.push('/about');
  };

  const [products, setProducts] = useState('');
  const fetchAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    setData(result);
  };

  return (
    <>
      <section>
        <MetaHead
          title="Home"
          description="Ini merupkan halaman website home"
          image="https://fakestoreapi.com/images/logo/nike.svg"
          url="https://ecom-staging.lalaland.com"
        />
        <h1>Home: Hello World</h1>
        <br />
        <button onClick={onRedirect}>Ke About</button>
        <br />
        <br />
        <ul>
          <li>
            <Link href="/menu/detail/1">Tampil Tuna ID</Link>
          </li>
          <li>
            <Link href="/menu/detail/belajar-nextjs/1">Tampil Tuna Slug</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
