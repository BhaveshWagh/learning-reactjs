import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';--
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
useLocation
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="dashboard" element={<Dashboard/>}/>
    </Routes>
  </Router>
);
function Home() {
  return (
    <React.Fragment>
      <h1>This Main Home</h1>
    </React.Fragment>
  );
}

function Learn() {
  return (
    <React.Fragment>
      <h1>Learn</h1>
      <h4> All Courses here</h4>
      <Link className="btn btn-success m-2" to="/learn/courses">
        Courses
      </Link>
      <Link className="btn btn-primary" to="/learn/bundles">
        Bundle
      </Link>
      <Outlet />
    </React.Fragment>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue", "Nodejs", "Nextjs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <React.Fragment>
      <h1>Course list</h1>
      <h4>Course card</h4>

    <p>More Test</p>
<NavLink style={({isActive})=>{
  return{
    backgroundColor: isActive ?  "Red"  :  "green"
  }
}} to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
<NavLink className="btn btn-light" to={`/learn/courses/tests`}>tests</NavLink>

      <Outlet />
    </React.Fragment>
  );
}

function Bundles() {
  return (
    <React.Fragment>
      <h1>Bundle list</h1>
      <h4>Bundle card</h4>
    </React.Fragment>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <React.Fragment>
      <h1>URL Params is : {courseid}</h1>
      <button onClick={() => {
      navigate("/dashboard",{state :"299₹"})
      }} className="btn btn-warning">Price</button>
      <Link to="/dashboard" state={"DJANGO"}>TestLink</Link>
    </React.Fragment>
  );
}


function Dashboard() {
  const location = useLocation()
  return (
    <React.Fragment>
      <h1>Info that i got here is {location.state} </h1>
      <h4>Bundle card</h4>
    </React.Fragment>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
