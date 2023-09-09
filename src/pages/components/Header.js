import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  return (
    <header>
      <Link href="/">
        <img src="/images/logo/nike.svg" alt="Logo Nike" width="50px" />
      </Link>
      <Link href="/about" className="nav">
        {locale === 'id-ID' ? 'Tentang Kami' : 'About'}
      </Link>
      <Link href="/contact-us" className="nav">
        {locale === 'id-ID' ? 'Hubungi Kami' : 'Contact Us'}
      </Link>
      <Link href="/menu/makanan" className="nav">
        {locale === 'id-ID' ? 'Menu Makanan' : 'Our Food'}
      </Link>
      <Link href="/menu/minuman" className="nav">
        {locale === 'id-ID' ? 'Menu Minuman' : 'Our Drink'}
      </Link>
    </header>
  );
}
