import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// load mock apis
import '_mockApis';

// project imports
import App from 'App';
import { HOME_PATH } from 'config';
import { store, persister } from 'store';
import { ConfigProvider } from 'contexts/ConfigContext';

// style + assets
import 'assets/scss/style.scss';

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <ConfigProvider>
                <BrowserRouter basename={HOME_PATH}>
                    <App />
                </BrowserRouter>
            </ConfigProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
