import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Courses from '../pages/Courses'
import Students from '../pages/Students'
import Navbar from '../components/Navbar'

export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/students" element={<Students />} />
            </Routes>

        </BrowserRouter>
    )
}