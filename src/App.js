import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Faq from './components/Faq';
import four from './components/404';
import Pricing from './components/Pricing';
import Portfolioshow3 from './components/Portfolioshow3';
import Projectsshow4 from './components/Projectshow4';
import Blog from './components/Blog';
import Blogpost from './components/Blogpost';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
    <div>
   <Header/>
   <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/home"  exact component={Home}/>
          <Route path="/about"  exact component={Aboutus}/>
          <Route path="/services"  exact component={Services}/>
          <Route path="/faq"  exact component={Faq}/>
          <Route path="/404"  exact component={four}/>
          <Route path="/pricing"  exact component={Pricing}/>
          <Route path="/portfolio3"  exact component={Portfolioshow3}/>
          <Route path="/portfolio4"  exact component={Projectsshow4}/>
          <Route path="/blog"  exact component={Blog}/>
          <Route path="/blog-post"  exact component={Blogpost}/>
          <Route path="/contact"  exact component={Contact}/>
          
        </Switch>
   <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
