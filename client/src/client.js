import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: process.env.REACT_APP_DEV_SANITY_PROJECT_ID,
  dataset: 'production', // default dataset
  apiVersion: '2023-01-25', // Sanity uses ISO dates (YYYY-MM-DD) in UTC timezone for versioning.
  useCdn: true,
  token: process.env.REACT_APP_DEV_SANITY_DEV_TOKEN,
})

const builder = imageUrlBuilder(client)

export const getImagUrl = (source) => builder.image(source)


