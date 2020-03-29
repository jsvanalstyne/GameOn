import React from "react";
import Memory from "../src/pages/Memory";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
     <Route exact path="/memory" component={Memory}/>
    </Router>
  );
}

export default App;
