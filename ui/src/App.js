import React, { Component } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './pages/components/header';
import { Home } from './pages/home';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={ Home } />
            </Switch>
        </main>
    )
}

export default App;