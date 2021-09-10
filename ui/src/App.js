import React, { Component } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './pages/components/header';
import { About } from './pages/about';
import { Research } from './pages/research';
import { Publications } from './pages/publications';
import { Projects } from './pages/projects';
import { Work } from './pages/work';
import { Education } from './pages/education';
import { People } from './pages/people';
import { Contact } from './pages/contact';

function App() {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={ About } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/research" component={ Research } />
                <Route exact path="/publications" component={ Publications } />
                <Route exact path="/projects" component={ Projects } />
                <Route exact path="/work" component={ Work } />
                <Route exact path="/education" component={ Education } />
                <Route exact path="/people" component={ People } />
                <Route exact path="/contact" component={ Contact } />
            </Switch>
        </main>
    )
}

export default App;