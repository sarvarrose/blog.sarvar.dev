import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_KEY,
});

const getPosts = () => client.getEntries().then((response) => response.items);

const getPost = (slug) =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'post',
    })
    .then((response) => response.items);

export { getPosts, getPost };
