import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Footer/Footer'
// import Home from './Views/Home'
import About from './Views/About'
import Carousel from './Slide-bar/Carousel';
import Submenu from './Slide-bar/Submenu/Submenu';
import Acquatic from './Components/Servicespages/acquatic';
import Poultry from './Components/Servicespages/poultry';
import Livestock from './Components/Servicespages/Livestock.component';
import Insuarance from './Components/Servicespages/insuarance';
import AgricLoan from './Components/Servicespages/agricloans';
import AgricEntrepreneur from './Components/Servicespages/agricentrepreneur';
import AgriCardProcurement from './Components/Servicespages/agriCard.procurements';
import AgriCardCBHI from './Components/Servicespages/agricard.cbhi';
import AgriCardGrains from './Components/Servicespages/agricard.grains';
import KeepingTheChange from './Components/Servicespages/agricard.ktc';
import MixedAgric from './Components/Servicespages/mixedagric';
import AgriCardPriceSurvey from './Components/Servicespages/agricprice.survey';
import AgriCardFertilizer from './Components/Servicespages/agricard.fertilizer';
import CommordityExchangeInformation from './Components/Servicespages/agricard.commodityexchange_information';
import Home from './Views/Home';
import RegisterPage from './Components/RegisterForm/Sign-up';
import DashBoard from './Views/user_dashbord';
import PhoneValidation from './Components/RegisterForm/PhoneValidation';
import { auth } from './firebase';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header currentUser={this.state.currentUser} />
        <div className="p-3">
          <Route exact path='/'>
            <Carousel />
          </Route>
        <Switch>
          <Route exact path="/">
              <Submenu />
              <Home />
            </Route>
            <Route path='/agricard_cbhi' component={AgriCardCBHI} />
            <Route path='/acquatic' component={Acquatic} />
            <Route path='/grains' component={AgriCardGrains} />
            <Route path='/poultry' component={Poultry} />
             <Route path='/livestock' component={Livestock} />
             <Route path='/agric_investment' component={Insuarance} />
             <Route path='/agricloans' component={AgricLoan} />
             <Route path='/procurement' component={AgriCardProcurement} />
             <Route path='/agric_entrepreneur' component={AgricEntrepreneur} />
             <Route path='/ktc' component={KeepingTheChange} />
             <Route path='/mixedagric' component={MixedAgric} />
             <Route path='/agric_price_survey' component={AgriCardPriceSurvey} />
             <Route path='/fetilizer_program' component={AgriCardFertilizer} />
            <Route path='/agric_cei' component={CommordityExchangeInformation} />
            <Route path='/register_page' component={RegisterPage} />
            <Route path='/sign_up' component={PhoneValidation} />
            <Route path='/dashbord' component={DashBoard} />
           <Route path="/about">
            <About />
          </Route>        
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
  }
  }

export default App;
