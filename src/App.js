
import './App.css';
/*
import Header from "./components/Header.jsx";


*/
import HeroSection from './components/HeroSection';
import Home  from './components/pages/Home.jsx';
import Services  from './components/pages/Services.jsx';
import Products  from './components/pages/Products.jsx';
import SignUp  from './components/pages/SignUp.jsx';
import Ogden  from './components/pages/Ogden.jsx';
import MV  from './components/pages/MV.jsx';
import RegistrationInfo  from './components/pages/RegistrationInfo';
import Navbar from "./components/Navbar.jsx";

import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';


function App() {
    return (
        <>
        <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' exact component={Services}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/Ogden' exact component={Ogden}/>
            <Route path='/MV' exact component={MV}/>
            <Route path='/sign-up' exact component={SignUp}/>
            <Route path='/registration' exact component={RegistrationInfo}/>
          <HeroSection />
        </Switch>
        </Router>
        </>
       
    );
}

export default App;