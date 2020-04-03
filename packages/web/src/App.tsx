import './App.css';

import { foo } from 'firebase-monorepo-core';
import React from 'react';

import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>The following is an excerpt from `firebase-monorepo-core`:</p>
                <pre>export const foo: string = "bar";</pre>
                <p>We can import this variable in our web (react) app and illustrate the shared nature of our packages:</p>
                <pre>import {foo} from 'firebase-monorepo-core';</pre>
                <pre>&lt;p&gt;foo is "{foo}"&lt;/p&gt;</pre>
                <p>If working correctly the below statement should output the result of the `foo` variable:</p>
                <pre className="result">foo is "{foo}"</pre>
            </header>
        </div >
    );
}

export default App;
