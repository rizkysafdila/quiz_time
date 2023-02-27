import '../styles/App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// import components
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import MyQuiz from './dashboard/MyQuiz/MyQuiz';
import CreateQuiz from './dashboard/MyQuiz/CreateQuiz';
import EditQuiz from './dashboard/MyQuiz/EditQuiz';
import PlayQuiz from './PlayQuiz/PlayQuiz';

// react routes
const router = createBrowserRouter([
  {
    path: '/register',
    element: <Signup></Signup>
  },
  {
    path: '/login',
    element: <Signin></Signin>
  },
  {
    path: '/my-quiz',
    element: <MyQuiz></MyQuiz>
  },
  {
    path: '/my-quiz/create',
    element: <CreateQuiz></CreateQuiz>
  },
  {
    path: '/my-quiz/:id/edit',
    element: <EditQuiz></EditQuiz>
  },
  {
    path: '/quiz/:id/play',
    element: <PlayQuiz></PlayQuiz>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
