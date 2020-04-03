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
                <pre>import {"{ foo }"} from 'firebase-monorepo-core';</pre>
                <p>If working correctly then the result of the `foo` variable should be displayed below:</p>
                <pre className="result">"{foo}"</pre>
            </header>
        </div >
    );
}

export default App;
