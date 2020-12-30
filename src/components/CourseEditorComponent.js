import React from "react";

export default class CourseEditorComponent extends React.Component{

    componentDidMount() {
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <h1>Course Editor {this.props.match.params.courseId}</h1>
            </div>
        )
    }
}