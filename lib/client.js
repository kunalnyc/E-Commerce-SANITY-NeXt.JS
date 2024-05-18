import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient ({
    apiVersion: '2024-05-18',
    dataset: 'production',
    projectId: 'ievd9eh7',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);