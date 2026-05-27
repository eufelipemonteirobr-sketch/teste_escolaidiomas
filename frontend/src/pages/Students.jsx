import { useEffect, useState } from 'react'
import api from '../services/api'

export default function Students() {

    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [courseId, setCourseId] = useState('')

    useEffect(() => {

        loadStudents()
        loadCourses()

    }, [])

    async function loadStudents() {

        try {

            const response = await api.get('/students')

            setStudents(response.data)

        } catch (error) {

            console.error(error)

        }
    }

    async function loadCourses() {

        try {

            const response = await api.get('/courses')

            setCourses(response.data)

        } catch (error) {

            console.error(error)

        }
    }

    async function handleCreateStudent(e) {

        e.preventDefault()

        try {

            await api.post('/students', {
                name,
                email,
                phone,
                course_id: courseId
            })

            setName('')
            setEmail('')
            setPhone('')
            setCourseId('')

            loadStudents()

        } catch (error) {

            console.error(error)

        }
    }

    return (
        <div style={{ padding: '20px' }}>

            <h1>Alunos</h1>

            <form
                onSubmit={handleCreateStudent}
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
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <select
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                >

                    <option value="">
                        Selecione um curso
                    </option>

                    {
                        courses.map(course => (
                            <option
                                key={course.id}
                                value={course.id}
                            >
                                {course.name}
                            </option>
                        ))
                    }

                </select>

                <button type="submit">
                    Cadastrar Aluno
                </button>

            </form>

            {
                students.map(student => (

                    <div key={student.id}>

                        <h3>{student.name}</h3>

                        <p>{student.email}</p>

                        <p>{student.phone}</p>

                        <hr />

                    </div>
                ))
            }

        </div>
    )
}