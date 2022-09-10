import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Login  from "./views/login";
import Navbar from "./views/navbar/Nav";
import SecondPage from "./views/secondPage/secondPage";
import Home from "./views/home/Home";
import Unit from "./views/Unit/Unit";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Container>
          <div className="mt-2 col-md-12">
            <Row className="justify-content-center">
              <Switch>
                <Route exact path="/" component={Home} />
                <ProtectedRoute exact path="/Unit" component={Unit} />
                <ProtectedRoute path="/second-page" component={SecondPage} />
                <Route path="/login" component={Login} />
              </Switch>
            </Row>
          </div>
        </Container>

      </div>
    </Router>
  );
}
