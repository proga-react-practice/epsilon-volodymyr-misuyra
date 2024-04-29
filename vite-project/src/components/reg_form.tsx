import React, { useState } from 'react';
import { TextField, Button, InputLabel, FormGroup, Box, Typography } from '@mui/material';  
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
  <Box sx={{ml:'16%', mt:'10%',width:'495px'}} color="secondary"> 
    <Typography style={{ fontSize: '40px', marginBottom: '18px', fontFamily:'Montserrat',marginLeft:'-18px'}} color="primary"><strong>Freelancer Registration</strong></Typography>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Box sx={{mb:'16px'}} >
          <InputLabel htmlFor="firstName" sx={{fontFamily:'Montserrat'}}>First Name:</InputLabel>
          <TextField type="text" sx={{width:"450px"}} id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </Box>
        <Box sx={{mb:'12px'}}>
          <InputLabel htmlFor="lastName" sx={{fontFamily:'Montserrat'}}>Last Name:</InputLabel>
          <TextField type="text" sx={{width:"450px",}} id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </Box>
        <Box sx={{mb:'12px'}}>
          <InputLabel htmlFor="age" sx={{fontFamily:'Montserrat'}}>Age:</InputLabel>
          <TextField type="number" sx={{width:"450px"}} id="age" name="age" value={formData.age} onChange={handleInputChange} required />
        </Box>
        <InputLabel htmlFor="skills" sx={{fontFamily:'Montserrat'}}>Skills:</InputLabel>
        <SkillsSelect
          selectedSkills={formData.skills}
          onChange={(skills) => setFormData({ ...formData, skills })}>
        </SkillsSelect>
        <Button sx={{mt:'36px', height:'48px',width:"450px",color:'white',fontSize:'16px',fontFamily:'Montserrat'}} type="submit" variant="contained" color="primary">Register</Button>
        <Button sx={{mt:'12px', height:'48px',width:"450px", color:'white',fontSize:'16px',fontFamily:'Montserrat'}} type="button" onClick={handleClearForm} variant="contained" color="primary">Clear</Button>
      </FormGroup> 
    </form>
    </Box>
);
};
export default RegistrationForm;
