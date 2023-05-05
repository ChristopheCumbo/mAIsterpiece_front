// import de la fonction createRoot de React-DOM (React-DOM va réconcilier notre arbre d’éléments
// React (aussi appelé DOM virtuel) avec le DOM Réel )
import { createRoot } from 'react-dom/client';

// composant racine
import App from 'src/components/App';

// == Render
const rootReactElement = <App />;

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const rootReactContainer = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web) : réconciliation vDOM avec DOM
rootReactContainer.render(rootReactElement);
