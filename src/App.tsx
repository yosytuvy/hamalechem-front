import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./features/layout/components/Navbar";
import Router from "./routers/Router";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/aopllo-client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
            <Router />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default App;
