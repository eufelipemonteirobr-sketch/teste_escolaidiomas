import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav
            style={{
                display: 'flex',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#222',
            }}
        >
            <Link to="/" style={{ color: '#fff' }}>
                Dashboard
            </Link>

            <Link to="/courses" style={{ color: '#fff' }}>
                Cursos
            </Link>

            <Link to="/students" style={{ color: '#fff' }}>
                Alunos
            </Link>
        </nav>
    )
}