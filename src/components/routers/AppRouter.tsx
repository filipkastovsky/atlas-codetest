import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from './utils/history';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { NotFound } from '../pages/NotFound';

export const AppRouter = () => (
    <Router {...{ history }}>
        <Switch>
            <Route exact path={'/'} component={Dashboard} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);
