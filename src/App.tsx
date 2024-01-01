import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./features/global/routers/Router";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import client from "./features/global/apollo/aopllo-client";
import { NavBar } from "./features/global/layout/components/Navbar";

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
