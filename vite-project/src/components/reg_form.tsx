import React, { useState } from 'react';
import { TextField, Button, InputLabel, FormGroup, Box } from '@mui/material'; 
import './RegistrationForm.css'; 
import { Freelancer } from './Freelancer';
import SkillsSelect from './SkillSelect'; 

interface Props {
  setFreelancers: React.Dispatch<React.SetStateAction<Freelancer[]>>;
}
const RegistrationForm: React.FC<Props> = ({ setFreelancers }) => {
  const [formData, setFormData] = useState<Freelancer>({
    firstName: '',
    lastName: '',
    age: 0,
    skills: [],
  });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFreelancers((prevFreelancers) => [...prevFreelancers, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      age: 0,
      skills: [],
    });
  };

  const handleClearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      age: 0,
      skills: [],
    });
  };
  
return (
  <Box sx={{ml:'18%', mt:'6%'}}> 
    <InputLabel variant="standard" style={{ fontSize: '38px', color: '#6a0dad', marginBottom: '26px', fontFamily:'Roboto' }}>Freelancer Registration</InputLabel>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Box sx={{mb:'12px'}}>
          <InputLabel htmlFor="firstName">First Name:</InputLabel>
          <TextField type="text" sx={{width:"400px",}} id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </Box>
        <Box sx={{mb:'12px'}}>
          <InputLabel htmlFor="lastName">Last Name:</InputLabel>
          <TextField type="text" sx={{width:"400px",}} id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </Box>
        <Box sx={{mb:'12px'}}>
          <InputLabel htmlFor="age">Age:</InputLabel>
          <TextField type="number" sx={{width:"400px",}} id="age" name="age" value={formData.age} onChange={handleInputChange} required />
        </Box>
        <InputLabel htmlFor="skills">Skills:</InputLabel>
        <SkillsSelect
          selectedSkills={formData.skills}
          onChange={(skills) => setFormData({ ...formData, skills })}>
        </SkillsSelect>
        <Button sx={{mt:'12px', height:'48px'}} type="submit" variant="contained" color="primary">Register</Button>
        <Button sx={{mt:'12px', height:'48px'}} type="button" onClick={handleClearForm} variant="contained" color="secondary">Clear</Button>
      </FormGroup> 
    </form>
    </Box>
);
};
export default RegistrationForm;
