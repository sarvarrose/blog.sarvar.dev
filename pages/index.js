import Head from 'next/head';
import Image from 'next/image';

import { authorName } from '../config';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{authorName} - Blog</title>
        <meta name='description' content={`${authorName} - Blog`} />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main>
        <h1>Welcome to My Blog!</h1>
      </main>

      <footer>© {authorName}</footer>
    </div>
  );
}
