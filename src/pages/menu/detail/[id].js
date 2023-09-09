import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  console.log('halo')
  console.log('apa isi router', router);
  return (
    <div>
      <h1>Detail Makanan dan Minuman</h1>
    </div>
  );
}
