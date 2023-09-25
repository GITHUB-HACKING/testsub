import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from './components/Intro';
import Appbar from './components/appbar/Appbar'
import Sidenav from './components/Course/SideNav'
import Signin from './components/user/Signin';
import Courses from './components/Course/Courses';
import AddCourse from './components/Course/AddCourse';
import Signup from "./components/user/Signup";


import "./App.css"

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<Intro/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/course' element={<CoursePage/>}></Route>
      </Routes>
    </Router>
  </>);
}
const CoursePage = () => {
  return (
    <>
      <Sidenav />
      <AddCourse />
    </>
  );
};
export default App;
