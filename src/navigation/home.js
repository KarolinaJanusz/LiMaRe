import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import banner from '../images/banner.png';
import face from '../images/face.png';
import hello from '../images/hello.jpg';
import logo2 from '../images/logo2.png';
import Post from '../components/Post';
import Blog from '../navigation/blog';
import Posts from '../components/Posts';
import { client } from '../artykuły/client';
import logo6 from '../images/logo6.png';

class Home extends React.Component{
  
  
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

  
    return(
      <>
      <section className = "bannerSection">
      <div className = "baner">
      </div>
      </section>
 
<section className = "section-2">

<img src = {logo6} className = "logo6"></img>
      
      
      <section className= "meet-me">
        
          <div className = "hello">
            <h2>Zrób coś tylko dla Siebie! Zasługujesz na to!</h2>
            <h3>Szybkie życie pozwala nam na ciągłe tłumaczenie: 
              brak czasu, praca, dom, dzieci, problemy...... 
              Spróbuj znaleźć choć chwilę dla Siebie, zasługujesz na to!

              Każdy z nas chce być młody, zdrowy, wesoły, zadbany, modny… 
              nie mów może od jutra, zadbaj o siebie już teraz i umów się na chwilę relaksu. 
              Bądź wyjątkowy dla siebie, nie dla innych.
              Jesteś warta/warty wszystkiego czego zapragniesz!</h3>
          </div>

        <div className= "sign-up">
            
            <h2>Poznajmy się :)</h2>
            <h5>Jestem zwolenniczką 
            holistycznego podejścia do zdrowia i trybu życia, 
            poszukuję metod przywrócenia skórze i tkankom zdrowego wyglądu. 
            Interesuję się naturalnymi metodami zdrowia psychicznego, 
            które ma wpływ na wszystkie czynniki naszego życia, 
            między innym na naszą twarz, aby promieniała zdrowiem i blaskiem. <br></br>
            </h5>
            <Link to = '/kontakt'><button>Zapisz się już dziś!</button></Link>
        </div>
      </section>



<section className = "home-articles">
  <h1 className = "home-article-title">NAJNOWSZE WPISY</h1>
  <h3 className = "home-article-scd-title">LiMaRe</h3>

  <div className = "wrapper">

<Posts posts = {this.state.articles}/>
</div>

</section>

</section>
      </>
    )
  }
  }

  export default Home;