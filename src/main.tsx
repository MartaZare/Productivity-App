import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/home/register/Register.tsx";
import Login from "./pages/home/login/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/log-in" element={<Login />} />
        </Routes>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
