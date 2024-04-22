import React, { useState } from 'react';
import RegistrationForm from './components/reg_form';
import FreelancerList from './components/cards';
import { Freelancer } from './Freelancer';
import './index.css'

const App: React.FC = () => {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);

  const handleDelete = (index: number) => {
    const updatedFreelancers = [...freelancers];
    updatedFreelancers.splice(index, 1);
    setFreelancers(updatedFreelancers);
  };

  return (
    <div className='maindiv'>
      <RegistrationForm setFreelancers={setFreelancers} />
      <FreelancerList freelancers={freelancers} onDelete={handleDelete} />
    </div>
  );
};

export default App;
