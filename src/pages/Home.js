import React, { useEffect,useState } from 'react';
import Container from '@mui/material/Container';
import PostList from '../components/PostList';
import {dummyapi} from '../util';


const Home = () => {
  const [posts, setPosts]=useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const loadPage= async() =>{
    const response= await dummyapi.get(`/post?page=${pageNumber}`);
    const postsArr= response?.data?.data ?? [];
    setPosts(oldPosts =>[...oldPosts, ...postsArr]);
    setPageNumber(page => page+1);
  }

   useEffect(()=>{
    loadPage();
   
  },[]);

  const loadMore =() =>{
    loadPage();
  }
 
  return (
    <>
    <Container fixed>
    <PostList  posts={posts} loadMore={loadMore}/>
  </Container>
  </>
  )
}

export default Home