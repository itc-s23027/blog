import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})

const getPostBySlug = async slug => {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }
    })
    return post.contents[0]
  } catch (err) {
    console.log('~~ getpostBySlug ~~')
    console.log(err)
  }
}
export { getPostBySlug }
