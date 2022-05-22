import React from 'react';
import './Blog.scss';

interface Props {
  props?: any;
}

const Blog = ({props}: Props): JSX.Element => {
  return (
    <section id="blog">
      <h2>BLOG</h2>
    </section>
  )
}

export default Blog;