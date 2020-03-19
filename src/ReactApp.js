import React from 'react';
import logo from './logo.svg';
import './App.css';

class ReactApp extends React.Component {
    setPageTitle() {
        var headElement = (document).querySelector("head");
        var PageTitle = headElement.querySelector("title");
        PageTitle.innerHTML = "Neal Robison | React App";
    }

    render() {
        this.setPageTitle();
        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Neal was Here!
                <br />Merged my old static HTML/CSS/JavaScript page with this Boilerplate React App!
                <br />

                {/* Edit <code>src/App.js</code> and save to reload. */}
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
        );
    };
  }
  
  export default ReactApp;