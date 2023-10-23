import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

const CourseParts = (props) => {
    return (
        <div>
            <p>{props.courseTitle} {props.courseExercises}</p>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header title={props.course.name} />
            {props.course.parts.map(topic => (
                <div key={topic.id}>
                    <h2>{topic.name}</h2>
                    {topic.parts.map(part => (
                        <CourseParts key={part.id} courseTitle={part.name} courseExercises={part.exercises} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Course;
