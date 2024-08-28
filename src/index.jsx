import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);*/

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);