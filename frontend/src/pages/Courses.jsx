import { useEffect, useState } from 'react'
import api from '../services/api'

export default function Courses() {

    const [courses, setCourses] = useState([])

    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        loadCourses()
    }, [])

    async function loadCourses() {

        try {

            const response = await api.get('/courses')

            setCourses(response.data)

        } catch (error) {

            console.error(error)

        }
    }

    async function handleCreateCourse(e) {

        e.preventDefault()

        try {

            await api.post('/courses', {
                name,
                level,
                description
            })

            setName('')
            setLevel('')
            setDescription('')

            loadCourses()

        } catch (error) {

            console.error(error)

        }
    }

    return (
        <div style={{ padding: '20px' }}>

            <h1>Cursos</h1>

            <form
                onSubmit={handleCreateCourse}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    maxWidth: '300px',
                    marginBottom: '30px'
                }}
            >

                <input
                    type="text"
                    placeholder="Nome do curso"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Nível"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                />

                <textarea
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">
                    Cadastrar Curso
                </button>

            </form>

            {
                courses.map(course => (

                    <div key={course.id}>

                        <h3>{course.name}</h3>

                        <p>{course.level}</p>

                        <p>{course.description}</p>

                        <hr />

                    </div>
                ))
            }

        </div>
    )
}