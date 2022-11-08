import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponents';
import Parents from './Example/Parents';
import A from './Example/A';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodo1 from './TestApp/ListTodo1';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUsers from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import DetailA from './Example/DetailA';
import E from './NMT/E';
import F from './NMT/F';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


/* 2 components : function and class components 
  JSX
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/todo">
              <ListTodo />
            </Route>

            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/user" exact>
              <ListUsers />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>

            <Route path="/a" exact>
              <A />
            </Route>

            <Route path="/a/:id">
              <DetailA />
            </Route>

            <Route path="/e" exact>
              <E />
            </Route>

            <Route path="/e/:id">
              <F />
            </Route>
          </Switch>


        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
