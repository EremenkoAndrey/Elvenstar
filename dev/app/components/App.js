import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import CartPageContainer from './CartPage/CartPageContainer';
import {Personal} from './Personal/Personal';


class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/'>
                    <Route path='personal' component={Personal}/>
                    <Route path='personal/cart/' component={CartPageContainer}/>
                </Route>
            </Router>
        )
    }
}

export default connect()(App)
