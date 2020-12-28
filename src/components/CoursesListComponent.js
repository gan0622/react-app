import React from 'react';
import CourseRowComponent from "./CourseRowComponent";


const course = [
    {
        _id:"123",
        title:"CS5200",
        owner:"haha",
        lastOpened:"yesterday"
    },
    {
        _id:"234",
        title:"CS5212",
        owner:"aha",
        lastOpened:"today"
    },
    {
        _id:"234",
        title:"CS5213",
        owner:"ah",
        lastOpened:"today"
    }
]


const CoursesListComponent = ({student,term}) =>
    <div>
     <h1>Course List (For {student} ) {term}</h1>
        <table className="table">
            {
                course.map(item =>
                     <CourseRowComponent item={item}/>
                )
            }
        </table>
    </div>

export default CoursesListComponent