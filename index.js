import App from "./app";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App></App>
    </StrictMode>
);