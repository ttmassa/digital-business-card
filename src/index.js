import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './components/App'

/* 

    Here is the model to follow : 
        <App />
            <Header />

            <Main />
                <Description />
                <Qualifications />
                <Links />
            <Main />
        <App />

*/

ReactDOM.createRoot(document.getElementById("root")).render(<App />);