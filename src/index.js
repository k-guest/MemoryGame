import '../src/styles/reset.scss';
import '../src/styles/style.scss';

import { createRoot } from 'react-dom/client';

import App from './components/App/App';

const rootReactElement = <App />;

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);