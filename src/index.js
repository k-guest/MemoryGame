import '../src/styles/style.scss';

import { createRoot } from 'react-dom/client';

// import App from './components/App';

// const rootReactElement = <App />;

import ReactApp from './components/ReactApp';

const rootReactElement = <ReactApp />;

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);