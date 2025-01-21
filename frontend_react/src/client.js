import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


// console.log('Project ID:', process.env.REACT_APP__SANITY_PROJECT_ID);
// console.log('Token:', process.env.REACT_APP__SANITY_TOKEN);

// const projectId = process.env.REACT_APP__SANITY_PROJECT_ID;
// const token = process.env.REACT_APP__SANITY_TOKEN;

const projectId = import.meta.env.VITE_APP__SANITY_PROJECT_ID;
const token = import.meta.env.VITE_APP__SANITY_TOKEN;


export const client = sanityClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2023-03-25',
  useCdn: true,
  token: token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);





