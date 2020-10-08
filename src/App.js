import React from 'react';


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
import four from './components/Four';
import Pricing from './components/Pricing';
import Portfolioshow3 from './components/Portfolioshow3';
import Projectsshow4 from './components/Projectshow4';
import Blog from './components/Blog';
import Blogpost from './components/Blogpost';
import Contact from './components/Contact';
import Adminregister from './components/Adminregister';
import Adminlogin from './components/Adminlogin';
import Dashboard from './components/Dashboard';
import Singleproject from './components/Singleproject';
import Managehome from './components/Managehome';
import Manageabout from './components/Manageabout';
import Manageservices from './components/Manageservices';
import Manageprojects from './components/Manageprojects';
import Managecontact from './components/Managecontact';
import Managefaq from './components/Managefaq';








function App() {
  return (
    <BrowserRouter>
    <div>
  
   <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/home"  exact component={Home}/>
          <Route path="/about"  exact component={Aboutus}/>
          <Route path="/services"  exact component={Services}/>
          <Route path="/faq"  exact component={Faq}/>
          <Route path="/pricing"  exact component={Pricing}/>
          <Route path="/portfolio3"  exact component={Portfolioshow3}/>
          <Route path="/portfolio4"  exact component={Projectsshow4}/>
          <Route path="/singleproject" exact component={Singleproject}/>
          <Route path="/blog"  exact component={Blog}/>
          <Route path="/blog-post"  exact component={Blogpost}/>
          <Route path="/contact"  exact component={Contact}/>
          <Route path="/adminregister"  exact component={Adminregister}/>
          <Route path="/admin"  exact component={Adminlogin}/>
          <Route path="/dashboard"  exact component={Dashboard}/>
          <Route path="/managehome"  exact component={Managehome}/>
          <Route path="/manageabout" exact component={Manageabout}/>
          <Route path="/manageservices" exact component={Manageservices}/>
          <Route path="/manageprojects" exact component={Manageprojects}/>
          <Route path="/managefaq" exact component={Managefaq}/>
          <Route path="/managecontact" exact component={Managecontact}/>
          <Route   component={four}/>
          
        </Switch>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
