import React from 'react';
import logo from './logo.svg';
import './App.css';
import DialogStore from "./stores/DialogStore";
import ModalUI from "./common/modal-module";
import {ApolloProvider} from "@apollo/client";
import {ApiClient} from "./services/config/api-client";
import {ProvideAuth} from "./common/PrivateRoute";
import RouteManager from "./modules/route-manager";
import { Provider } from 'mobx-react';
import FileStore from "./stores/FileStore";

function App() {
  return (
      <ProvideAuth>
        <ApolloProvider client={ApiClient}>
          <Provider
              DialogStore={DialogStore}
              FileStore={FileStore}
          >
            <RouteManager/>
            <ModalUI/>
          </Provider>
        </ApolloProvider>
      </ProvideAuth>
  );
}

export default App;
