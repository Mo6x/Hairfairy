import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "react-query";
import reportWebVitals from "./reportWebVitals";
import queryClient from "./Hooks/queryClient"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";



document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<App />} />
              
            </Routes>
          </Router>
        </QueryClientProvider>
      </React.StrictMode>
    );
  } else {
    console.error('Root element not found');
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
