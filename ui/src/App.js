import React, { Component } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { Route, Switch } from 'react-router-dom';
import { Header } from './pages/components/header';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/dashboard" component={ Header } exact />
            </Switch>
        </main>
    )
}

export default App;