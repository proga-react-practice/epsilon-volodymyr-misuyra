import React, { useState } from 'react';
import RegistrationForm from './components/reg_form';
import FreelancerList from './components/cards';
import { Freelancer } from './components/Freelancer';
import { ThemeProvider} from '@mui/material/styles';
import { lightTheme, darkTheme } from './themes';
import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);

  const handleDelete = (index: number) => {
    const updatedFreelancers = [...freelancers];
    updatedFreelancers.splice(index, 1);
    setFreelancers(updatedFreelancers);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={`maindiv ${darkMode ? 'dark-background' : 'light-background'}`}>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          color="primary"
          inputProps={{ 'aria-label': 'toggle dark mode' }}
        />
        <RegistrationForm setFreelancers={setFreelancers} />
        <FreelancerList freelancers={freelancers} onDelete={handleDelete} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
