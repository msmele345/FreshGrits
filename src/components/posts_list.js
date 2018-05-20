import React, {Component} from 'react';
import Post from './post';


const PostList = (props) => {

  const posts = props.posts.map(post => {
    return <li>`${post.data.title}`</li>
  });


  return (
    <ul>
      {posts}
    </ul>
    
  );
}

export default PostList;

//Style list items. Add padding and spacing 
// Make API call for posts dynamic 