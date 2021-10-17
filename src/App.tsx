import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Top from './components/pages/Top';
// import LoginPage from './components/pages/Login';
// import Login from './components/pages/Login_bootstrap';
import LoginPage from './components/pages/LoginTmp';
import MainPage from './components/pages/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/Top" component={Top} />
        <Route exact path="/Mainpage" component={MainPage} />
        // <Redirect to="/" />    //マッチするパスがなかった場合のリダイレクト先
      </Switch>
    </BrowserRouter>
  )
}

export default App;
