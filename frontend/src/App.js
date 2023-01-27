import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Component, useContext } from "react";
import Room from "./components/Room";
import NewUser from "./components/NewUser";
import Home from "./components/Home";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  const [userName, setUserName] = React.useState();
  const [name, setName] = React.useState();
  const [room, setRoom] = React.useState("");
  const [userId, setUserId] = React.useState();
  const [isAuth, setIsAuth] = React.useState(false);
  const [video, setVideo] = React.useState(false);
  const [url, setUrl] = React.useState("");

  function RequireAuth({ children, redirectTo }) {
    return isAuth ? children : <Navigate to={redirectTo} />;
  }

  function RequireAuthAndRoom({ children, redirectTo }) {
    return video ? children : <Navigate to={redirectTo} />;
  }
  return (
    <div id="app">
      <GlobalContext.Provider
        value={{
          userName,
          setUserName,
          room,
          setRoom,
          userId,
          setUserId,
          name,
          setName,
          isAuth,
          setIsAuth,
          video, 
          setVideo,
          url, 
          setUrl
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<NewUser />} />
            <Route
              path="/home"
              element={
                <RequireAuth redirectTo="/">
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/rooms/:room_id"
              element={
                <RequireAuthAndRoom redirectTo="/">
                  <Room />
                </RequireAuthAndRoom>
              }
            />
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
