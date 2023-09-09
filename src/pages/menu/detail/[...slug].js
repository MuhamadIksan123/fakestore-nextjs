import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DetailMenuSlug() {
  const router = useRouter();

  console.log(router);

  useEffect(() => {
    if (!router.query.slug) return 
    const [slugName, idMenu] = router.query.slug;
    console.log('slugName, idMenu', slugName, idMenu);
  }, [router]);

  return (
    <div>
      <h1>Detail Menu dan Slug</h1>
    </div>
  );
}
