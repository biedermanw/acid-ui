import * as ReactDOMClient from "react-dom/client"; // Import the new ReactDOM client.
import App from "./App";

const domNode = document.getElementById("root");

if (domNode) {
  const root = ReactDOMClient.createRoot(domNode);
  root.render(<App />);
} else {
  console.error("Root element not found!");
}
