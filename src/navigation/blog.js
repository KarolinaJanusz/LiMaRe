import { render } from '@testing-library/react';
import React from 'react';
import '../scss/cennik.scss'
import client from '../artykuły/client'
import Posts from '../components/Posts';

class Blog extends React.Component{
    state={
      articles: []
    }
  
  componentDidMount(){
    client.getEntries()
    .then((response) =>{
        console.log(response);
        this.setState({
          articles: response.items
        })
    })
    .catch(console.error)
  }
  
    render(){
      return (
        
            <main>
              <h1 className = 'sitetitle'>artykuły</h1>
            <div className = "wrapper">
                  <Posts posts = {this.state.articles}/>
            </div>
            </main>
         
      );
    }
  }

  
  

  export default Blog;