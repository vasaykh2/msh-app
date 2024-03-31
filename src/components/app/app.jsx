// app.jsx
import { Route, Routes } from "react-router-dom";
import Signup from "../../pages/signup/signup";
import Signin from "../../pages/signin/signin";
import NotFound from "../../pages/not-found";
import HomePage from "../../pages/home-page/home-page";
import BuilderPage from "../../pages/builder-page/builder-page";
import ProtectedRoute from "../../routes/protected-route";
import ErrorNotificator from "../error-notificator/error-notificator";
// import Navibar from "../../components/navibar/navibar";

import "./app.scss";

const App = () => {
  // const path = useLocation().pathname;

  return (
    <>
      {/* <Navibar /> */}
      <Routes>
        <Route
          path="/signup"
          element={
            <ProtectedRoute notAuth={false}>
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoute notAuth>
              <Signin />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/builder"
          element={
            <ProtectedRoute>
              <BuilderPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ErrorNotificator />
    </>
  );
};

export default App;
