import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./containers/HomePage";
import ProductsPage from "./containers/ProductsPage/ProductsPage";
import Navbar from "./components/Common/Navbar/Navbar";

const App = () => {
    return (
        <div className={'main-app'}>
            <div>
                <Navbar />
            </div>
            <div className={'main-app--content'}>
                <div className={'content--page'}>
                    <Router>
                        <Switch>
                            <Route path={'/products'} exact component={ProductsPage}/>
                            <Route path={'/'} exact component={HomePage}/>
                        </Switch>
                    </Router>
                </div>
                <div className={'content--footer'}></div>
            </div>
        </div>
);
}

export default App