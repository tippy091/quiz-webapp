import { createBrowserRouter } from "react-router-dom";
import ApplicationWrapper from "./Components/ApplicationWrapper/ApplicationWrapper";
import QuizStepper from "./Components/Quiz/QuizStepper/QuizStepper";
import App from "./App";
import Quiz from "./Components/Quiz/Quiz";
import GetAllQuiz from "./Components/Quiz/GetAllQuiz/GetAllQuiz";
import QuizResult from "./Components/Quiz/QuizResult/QuizResult";
import Admin from "./Components/AdminPanel/Admin";
import AddQuestion from "./Components/Question/AddQuestion/AddQuestion";
import UpdateQuestion from "./Components/Question/UpdateQuestion/UpdateQuestion";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/quiz-stepper",
        element: <QuizStepper />,
      },
      {
        path: "/take-quiz",
        element: <Quiz />,
      },
      {
        path: "/all-quizzes",
        element: <GetAllQuiz />,
      },
      {
        path: "/quiz-result",
        element: <QuizResult />,
      },
    ],
  },
  {
    path: "/auth/",
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <Admin />,
    children: [
      {
        path: "create-quiz",
        element: <AddQuestion />,
      },
      {
        path: "update-quiz/:id",
        element: <UpdateQuestion />,
      },
    ],
  },
]);
