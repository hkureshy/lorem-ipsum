import React from 'react'

import Layout from '../components/Layout'

export const BlogPostTemplate = ({}) => {
  return (
    <>
      <h1>Blog Post Page</h1>
    </>
  )
}

BlogPostTemplate.propTypes = {}

const BlogPost = () => {
  return (
    <Layout>
      <BlogPostTemplate />
    </Layout>
  )
}

BlogPost.propTypes = {}

export default BlogPost
