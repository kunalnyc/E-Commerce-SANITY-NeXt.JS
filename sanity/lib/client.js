import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: '2024-05-18',
  dataset: 'production',
  projectId: 'ievd9eh7',
  useCdn:true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})
 