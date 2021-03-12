import React from 'react';
import client from './client';
import Post from '../components/Post'
import Posts from '../components/Posts';
import {Link} from 'react-router-dom';

class SingleArticle extends React.Component{
            
    constructor(){
        super()
        this.state = {article: null}
    }
    componentDidMount() {
        const {params} = this.props.match
        console.log(this.props.match);
        if(params && params.slug) {
            client.getEntries({content_type: 'articles' , 'fields.slug': params.slug})
            
            .then((response) =>{
                console.log(response)
                this.setState({article: response.items[0]})
            })
            
        }
    }

    render(){
        if (this.state.article === null){
            return <h1>Not Found</h1>
        }
        console.log(this.state.article.fields.name)
        return(
           <>
           <section className = "single-article">
            <h1>{this.state.article.fields.name}</h1>
            <p>{this.state.article.fields.description}</p>
            {/* <div>{this.state.article.fields.featuredImages}</div> */}
            </section>
           </>
        )
    }
}

export default SingleArticle;