import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/home'
import { APP_ROUTES } from './const/app-routes'

const useRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={APP_ROUTES.home} element={<HomePage />} />

        <Route
          path='*'
          element={<Navigate to={APP_ROUTES.home} />}
        />
      </Routes>
    </div>
  )
}

export { useRoutes }
