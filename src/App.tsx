import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import { ToastProvider } from 'react-toast-notifications';

import Login from "./pages/Login";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
