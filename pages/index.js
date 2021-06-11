import Head from 'next/head';
import Link from 'next/link';

import usePosts from '../hooks/usePosts';
import dateReadable from '../helpers/date';
import { authorName } from '../config';

export default function Home() {
  const [posts, isLoading] = usePosts();

  return (
    <div>
      <Head>
        <title>{authorName} - Blog</title>
      </Head>
      <h2>Posts</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => {
          return <Post key={post.sys.id} post={post} />;
        })
      )}
    </div>
  );
}

const Post = ({ post }) => {
  const { title, banner, tags, publishedAt } = post.fields;
  return (
    <Link href={post.sys.id}>
      <div className='posts__post__img__container'>
        <Banner banner={banner} />
        <h3>{title}</h3>
        <small>{dateReadable(publishedAt)}</small>
        <span>
          <Tags tags={tags} />
        </span>
      </div>
    </Link>
  );
};

const Banner = ({ banner }) => {
  if (banner) {
    const { url, title } = banner.fields.file;
    return <img className='post__banner' src={url} alt={title} />;
  }
  return (
    <img className='post__banner' src='https://picsum.photos/300/200' alt='' />
  );
};

const Tags = ({ tags }) => {
  return tags.map((tag) => (
    <small key={tag} className='tag'>
      {tag}
    </small>
  ));
};
