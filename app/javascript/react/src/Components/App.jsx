// import * as React from 'react';
// import { createRoot } from "react-dom/client";
// import MyMapComponent from "./Map"; // Make sure this is the correct path to your component
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
// } from "react-router-dom";

// // Assuming MyMapComponent is the component you actually want to display at the root path
// // If you intend to use the Map component defined below instead, replace MyMapComponent with Map in the router setup

// const Map = () => {
//     return <div>Hello, Rails 777!</div>;
// };

// const router = createBrowserRouter([
//     { path: '/', element: <MyMapComponent/> }, // Using MyMapComponent here
// ]);

// // If you want to use the Map component you defined instead, just replace <MyMapComponent/> with <Map/>

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// const container = document.getElementById("root");
// const root = createRoot(container); // Create a root.

// root.render(<App />); // Render the App component to the DOM.

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import MyMapComponent from "./Map";
import Homepage from "../Features/Homepage/Homepage";
import Services from "../Features/Services/Services"
import Suppliers from "../Features/Suppliers/Suppliers";
import Contact from "../Features/Contact/Contact";
import Successes from "../Features/Successes/Successes";


const Hello = () => {
    return (
        <div className={container}>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>;
        </div>
    )

  };
  
  // document.addEventListener('DOMContentLoaded', () => {
  //   const container = document.getElementById('hello');
  //   if(container) { // Ensure the container exists
  //     const root = ReactDOM.createRoot(container);
  //     root.render(<MyMapComponent />);
  //   } else {
  //     console.error('The target container is not found.');
  //   }
  // });

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
    { path: '/elevator-services', element: <Services /> },
    { path: '/wyatt-elevator-success', element: <Successes /> },
    { path: '/elevator-suppliers', element: <Suppliers /> },
    { path: '/contact-us', element: <Contact /> },
  { path: '/elevator-service-area', element: <MyMapComponent /> }
]);

createRoot(document.getElementById("hello")).render(
    <RouterProvider router={router} />
);

export default Hello;
