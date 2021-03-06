import Menu from './components/Menu';
import Page from './pages/Page';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Sub pages
import Home from './pages/home/Home';
import FirstAid from './pages/firstaid/FirstAid';
import FirstAidSelected from './pages/firstaid/FirstAidSelected';

import Survival from './pages/survival/Survival';
import SurvivalSelected from './pages/survival/SurvivalSelected';

import Faq from './pages/faq/Faq';
import FaqSelected from './pages/faq/FaqSelected';

import Assistant from './pages/assistant/Assistant';
import Weather from './pages/weather/Weather';
import Report from './pages/report/Report';

const App: React.FC = () => {

  return (
    <IonApp>

      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          
          <IonRouterOutlet id="main">
            <Route path="/page/:name" component={Page} exact />

            <Route path='/home' component={Home} exact/>
            <Route path="/firstaid" component={FirstAid} exact/>
            <Route path="/firstaid/:name" component={FirstAidSelected}/>

            <Route path='/survival' component={Survival} exact/>
            <Route path='/survival/:name' component={SurvivalSelected}/>

            <Route path='/faq' component={Faq} exact/>
            <Route path='/faq/:question' component={FaqSelected}/>

            <Route path='/assistant' component={Assistant} exact/>
            <Route path='/weather' component={Weather} exact/>
            <Route path='/report' component={Report} exact/>

            <Redirect from="/" to="/home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
