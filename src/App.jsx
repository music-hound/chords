// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

import Layout from './pages/Layout';
import Chords from "./pages/Chords";
import ErrorPage from './pages/ErrorPage';
import Progression from './pages/Progression';

console.clear()

function App() {

  const isLight = useSelector( (state) => state.isLight );

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router basename={ import.meta.env.BASE_URL } >
        <Routes>
          <Route
          path="/"
          element={<Layout />}
          >
            <Route index element={<Chords />} />
            <Route path="/progression" element={<Progression />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
