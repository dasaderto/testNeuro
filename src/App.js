import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "./pages";


function App() {
  return (
    <div className="wrapper">
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
