
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'your_project_id',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
})
