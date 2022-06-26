import React from 'react';
import {Stack,Button} from '@mui/material';
import PostCard from './PostCard';






const PostList = (props) => {
console.log(props);
  return (
    <Stack spacing={2} mt={4} mb={2} alignItems="center">
        {props.posts.map((singlePost,idx) => {
            return(
                
                 <PostCard key={idx} singlePost={singlePost} />
                 
            )
        })}
        <Button variant="text" onClick={props.loadMore}>LOAD MORE...</Button>
</Stack>
  )
}

export default PostList