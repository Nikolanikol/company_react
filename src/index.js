// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/app/app';


import { createRoot } from "react-dom/client";
import App from "./components/app/app";

import "./index.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     App()
// );


