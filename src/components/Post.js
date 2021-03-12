import React from 'react';
import marked from 'marked';
import {Link} from 'react-router-dom';

const Post = ({article}) =>{
    console.log(article)
    const {name, featuredImages, description} = article.fields;
    const postDescription = marked(description);
    return(
        <div className = 'post'>
            <h2 className = 'title'> <Link to = {`blog/${article.fields.slug}`}>{name}</Link></h2>
            {featuredImages && <img className = 'featuredImages' src = {featuredImages.fields.file.url} alt = {name} title= {name} />}  
            <section dangerouslySetInnerHTML= {{__html: postDescription}} className= "description"/>

        </div>
    )
}


  export default Post;