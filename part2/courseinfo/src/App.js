import React from 'react';
import Course from './Course';

const App = () => {
  const course = {
    name: 'Web development curriculum',
    parts: [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
    ]
  }

    // Extract exercises for all parts across topics
    const allExercises = course.parts.flatMap(topic =>
        topic.parts.map(part => part.exercises)
    );

    return (
        <div>
            <Course course={course} />
            <p>
                total of {allExercises.reduce((acc, curr) => acc + curr, 0)} exercises
            </p>
        </div>
    );
}

export default App
