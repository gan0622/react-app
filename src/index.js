import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import CoursesListComponent from "./components/CoursesListComponent";
import reportWebVitals from './reportWebVitals';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseEditorComponent from "./components/CourseEditorComponent";

ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <Link to="/login">Login</Link> |
            <Link to="/register">Register</Link> |
            <Link to="/profile">Profile</Link> |
            <Link to="/courses">Courses</Link> |
            <Link to="/edit">Editor</Link>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/courses" exact>
                    <CoursesListComponent student="jianyuan"/>
                </Route>
                <Route path="/edit/:courseId"
                       exact
                       component={CourseEditorComponent}/>
        </div>
    </BrowserRouter>,
      document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
