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


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                title: 'Fundamentals of React',
                exercises: 10
            },
            {
                title: 'Using props to pass data',
                exercises: 7
            },
            {
                title: 'State of a component',
                exercises: 14
            }
        ]
    }

    const x = course.parts.map((part) => part.exercises)


    return (
        <div>
            <Header title={course.name}/>
            {course.parts.map(part => {
                return <CourseParts courseTitle={part.title} courseExercises={part.exercises}/>
            })}
            <p>
                Number of exercises
                {' '}
                {x.reduce((acc, curr) => {
                    return acc + curr
                }, 0)}
            </p>
        </div>
    )
}

export default App
