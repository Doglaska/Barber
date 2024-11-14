import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Importação das páginas
import Home from './pages/home/page.jsx';
import Cart from './pages/cart/page.jsx';
import Profile from './pages/profile/page.jsx';
import Plates from './pages/plates/page.jsx';
import Auth from './pages/auth/page.jsx';
import Profissional from './pages/profissional/page.jsx';
import User from './pages/user/page.jsx';
import Agendamento from './pages/agendamento/page.jsx'; // Adicionando a importação do Agendamento

// Configuração das rotas
const pages = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/cart', element: <Cart /> },
            { path: '/profile', element: <Profile /> },
            { path: '/plates', element: <Plates /> },
            { path: '/auth', element: <Auth /> },
            { path: '/profissional', element: <Profissional /> },
            { path: '/user', element: <User /> },
            { path: '/agendamento', element: <Agendamento /> } // Adicionando a rota do Agendamento
        ]
    }
]);

// Renderizando o aplicativo
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={pages} />
    </React.StrictMode>
);
