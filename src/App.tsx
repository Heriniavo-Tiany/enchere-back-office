import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

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
import Inscription from "./pages/Inscription";
import ListeDemandeRechargement from "./pages/ListeDemandeRechargement";
import Statistique from "./pages/Statistique";
import Categories from "./pages/Categories";
import Logout from "./pages/Logout";
import ListeEncheres from "./pages/ListeEncheres";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/encheres" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>

            <Route path="/inscription" exact={true}>
              <Inscription />
            </Route>
            <Route path="/rechargements" exact={true}>
              <ListeDemandeRechargement />
            </Route>
            <Route path="/statistiques" exact={true}>
              <Statistique />
            </Route>
            <Route path="/categories" exact={true}>
              <Categories />
            </Route>
            <Route path="/logout" exact={true}>
              <Logout />
            </Route>
            <Route path="/encheres" exact={true}>
              <ListeEncheres />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
