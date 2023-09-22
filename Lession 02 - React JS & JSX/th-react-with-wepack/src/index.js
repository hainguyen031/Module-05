import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { createRoot } from 'react-dom/client';

//Create App component
// function App() {
//     return (
//         <div>
//             <h1>Hello React World!</h1>
//         </div>
//     );
// }

//Render App component into "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = createRoot(document.getElementById("root"));
root.render(<App/>);





