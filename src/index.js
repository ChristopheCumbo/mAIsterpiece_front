// import de la fonction createRoot de React-DOM (React-DOM va réconcilier notre arbre d’éléments
// React (aussi appelé DOM virtuel) avec le DOM Réel )
import { createRoot } from 'react-dom/client';

// import du nécessaire pour Redux
import { Provider } from 'react-redux';

/*
-- BrowserRouter --
https://reactrouter.com/docs/en/v6/api#browserrouter
Composant de react-routeur-dom : il utilise l'HistoryAPI HTML5 pour surveiller l’historique des URL
On englobe notre composant racine App avec <BrowserRouter>
*/
import { BrowserRouter } from 'react-router-dom';

// composant racine
import App from 'src/components/App';
// import du store pour Redux
import store from 'src/store';

// == Render
const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const rootReactContainer = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web) : réconciliation vDOM avec DOM
rootReactContainer.render(rootReactElement);
