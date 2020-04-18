import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { history } from './utils/history';

export const AppRouter = () => (
    <Router {...{ history }}>
        <Switch>
            <Route component={() => <div />} />
        </Switch>
    </Router>
);
