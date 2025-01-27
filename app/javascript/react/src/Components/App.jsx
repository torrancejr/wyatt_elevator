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

import React, { useState, useEffect, useContext } from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, Navigate } from "react-router-dom";
import MyMapComponent from "./Map";
import Homepage from "../Features/Homepage/Homepage";
import Services from "../Features/Services/Services";
import Suppliers from "../Features/Suppliers/Suppliers";
import Contact from "../Features/Contact/Contact";
import Admin from '../Features/Admin/Admin';
import Calendar from "../Features/Admin/Calendar";
import Successes from "../Features/Successes/Successes";
import Login from "../Features/Login/Login";
import Signup from "../Features/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import ContactMe from "../Features/Admin/ContactMe";
import MapContacts from "../Features/Admin/MapContacts";
import Newsletter from "../Features/Admin/Newsletter";
import JobList from "../Features/Admin/JobList";
import { UserProvider, useCurrentUser } from '../userProvider';
import BeforeAndAfter from "../Features/BeforeAndAfter/BeforeAndAfter";
import BlogIndex from "../Features/Blog/BlogIndex";
import HistoryOfElevators from "../Features/Blog/articles/HistoryOfElevators";
import FiveEssentialStepsElevatorStops from "../Features/Blog/articles/ElevatorSafety";
import ElevatorUpgrade2025 from "../Features/Blog/articles/ElevatorUpgrade2025";



const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/elevator-services', element: <Services /> },
  { path: '/wyatt-elevator-success', element: <Successes /> },
  { path: '/elevator-suppliers', element: <Suppliers /> },
  { path: '/contact-us', element: <Contact /> },
  { path: '/elevator-service-area', element: <MyMapComponent /> },
  {
    path: '/admin/*',
    element: <PrivateRoute><Admin /></PrivateRoute>,
    children: [
      { path: '', element: <Calendar /> },
      { path: 'contact-me', element: <ContactMe /> },
      { path: 'map-contacts', element: <MapContacts /> },
      { path: 'newsletter', element: <Newsletter /> },
      { path: 'jobs', element: <JobList /> },
    ]
  },
  // Blog Index and Categories
  { path: '/elevate-philly', element: <BlogIndex /> }, // Blog Index Page
  { path: '/elevate-philly/philly-local-life/history-of-elevators', element: <HistoryOfElevators /> },
  { path: '/elevate-philly/maintenance-and-safety/five-essential-steps-if-elevator-stops', element: <FiveEssentialStepsElevatorStops /> },
  { path: '/elevate-philly/business-insights/philadelphia-businesses-5-signs-elevator-upgrade', element: <ElevatorUpgrade2025 /> },

  { path: '/calendar', element: <Calendar /> },
  { path: '/login', element: <Login /> },
  { path: '/sign-up', element: <Signup /> },
  { path: '/logout', element: <Homepage /> },
  { path: '/before-and-after', element: <BeforeAndAfter /> },
]);

createRoot(document.getElementById("hello")).render(
    <UserProvider> {/* Wrap the entire app with UserProvider */}
        <RouterProvider router={router} />
    </UserProvider>
);

export default Hello;
