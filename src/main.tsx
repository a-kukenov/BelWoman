import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout/MainLayout.tsx'
import Home from './pages/home/Home.tsx'
import History from './pages/history/History.tsx'
import Portraits from './pages/portraits/Portraits.tsx'
import Portrait from './pages/portraits/Portrait.tsx'
import War from './pages/war/War.tsx'
import Today from './pages/today/Today.tsx'
import Quiz from './pages/quiz/Quiz.tsx'
import Sources from './pages/sources/Sources.tsx'
import Schools from './pages/schools/Schools.tsx'
import School from './pages/schools/School.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/history',
                element: <History />
            },
            {
                path: '/portraits',
                element: <Portraits />
            },
            {
                path: '/portraits/:id',
                element: <Portrait />
            },
            {
                path: '/schools',
                element: <Schools />
            },
            {
                path: '/schools/:id',
                element: <School />
            },
            {
                path: '/war',
                element: <War />
            },
            {
                path: '/today',
                element: <Today />
            },
            {
                path: '/quiz',
                element: <Quiz />
            },
            {
                path: '/sources',
                element: <Sources />
            },
            // {
            //     path: '/myTeacher',
            //     element: <MyTeacher />
            // }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
