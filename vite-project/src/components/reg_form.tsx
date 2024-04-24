import React, { useState } from 'react';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFreelancers(prevFreelancers => [...prevFreelancers, formData]);
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
    <div className="form-container"> 
      <h2>Freelancer Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label><br/>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label><br/>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="age">Age:</label><br/>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label><br/>
          <SkillsSelect selectedSkills={formData.skills} onChange={(e) => setFormData({ ...formData, skills: Array.from(e.target.selectedOptions, option => option.value) })} /> {/* Викликаємо компонент SkillsSelect та передаємо пропси */}
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={handleClearForm}>Clear</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
