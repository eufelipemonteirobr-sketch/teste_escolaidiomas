import { useEffect, useState } from 'react'
import api from '../services/api'

export default function Dashboard() {

    const [courses, setCourses] = useState([])
    const [students, setStudents] = useState([])

    useEffect(() => {

        loadData()

    }, [])

    async function loadData() {

        try {

            const coursesResponse = await api.get('/courses')
            const studentsResponse = await api.get('/students')

            setCourses(coursesResponse.data)
            setStudents(studentsResponse.data)

        } catch (error) {

            console.error(error)

        }
    }

    function countStudentsByCourse(courseId) {

        return students.filter(
            student => student.course_id === courseId
        ).length
    }

    return (
        <div style={{ padding: '20px' }}>

            <h1>Dashboard</h1>

            <div
                style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '30px'
                }}
            >

                <div
                    style={{
                        padding: '20px',
                        border: '1px solid #ccc'
                    }}
                >
                    <h2>Total de Cursos</h2>

                    <p>{courses.length}</p>
                </div>

                <div
                    style={{
                        padding: '20px',
                        border: '1px solid #ccc'
                    }}
                >
                    <h2>Total de Alunos</h2>

                    <p>{students.length}</p>
                </div>

            </div>

            <h2>Alunos por Curso</h2>

            {
                courses.map(course => (

                    <div
                        key={course.id}
                        style={{
                            marginBottom: '10px'
                        }}
                    >

                        <strong>{course.name}</strong>

                        <p>
                            {countStudentsByCourse(course.id)} alunos
                        </p>

                    </div>
                ))
            }

        </div>
    )
}