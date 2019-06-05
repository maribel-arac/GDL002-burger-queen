import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ShowMenu from './components/menu';
import ShowCombos from './components/combos';
import Kitchen from './components/kitchen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar name="Mariscos Selectos Perico" /> 
        {/* <Route to="/" component={Home}/>*/}
        <Route exact path="/" render={() => <Home title="Platillos" />} />
        <Route path="/menu" component={ShowMenu} /> 
       <Route path="/combos" render={() => <ShowCombos />} />
       <Route path="/kitchen" render={() => <Kitchen />} />
      </div>
    </BrowserRouter>
  );
}

export default App;