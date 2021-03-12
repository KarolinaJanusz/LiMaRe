import React from 'react';
import Post from '../components/Post';
import {Link} from 'react-router-dom';
import {createClient} from 'contentful'
import { client } from '../artykuły/client'


const Posts = ({posts}) =>{
    return(
        <div className= "posts">
             
            {posts.map((article, index) => <Post article = {article} key = {index} />)}
           
        </div>
    )
}


  export default Posts;