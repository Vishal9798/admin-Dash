import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Charts from './pages/Charts';
import { lightTheme, darkTheme } from './themes';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <ThemeSwitcher toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </Toolbar>
        </AppBar>
        <Sidebar />
        <main style={{ marginLeft: 240, padding: 16 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
