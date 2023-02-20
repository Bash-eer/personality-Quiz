import logo from "./logo.svg";
import "./App.css";
import Index from "./Components/Index";
import StartingPage from "./Components/startingPage"
import Quiz from "./Components/Quiz";
import Form from "./Components/Form";
import Results from "./Components/Results";
import LastPage from './Components/LastPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
     
      <BrowserRouter>
        <Routes>
          {/* main page */}
          <Route
            path="/"
            element={
              <>
                <StartingPage />
              </>
            }
          />
          <Route
            path="/result"
            element={
              <>
                <Results />
              </>
            }
          />

          {/* quiz page  */}
          <Route
            path="/quiz"
            element={
              <>
                <Quiz />{" "}
              </>
            }
          />
          {/* get my results page */}
          <Route
            path="/form"
            element={
              <>
                <Form />{" "}
              </>
            }
          />
          {/* results page  */}
          <Route
            path="/results"
            element={
              <>
                <Results />{" "}
              </>
            }
          />
          <Route
            path="/resultpage"
            element={
              <>
                <LastPage/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
