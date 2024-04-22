import React from 'react';
import './FreelancerList.css';

interface Freelancer {
  firstName: string;
  lastName: string;
  age: number;
  skills: string[];
}

interface Props {
  freelancers: Freelancer[];
  onDelete: (index: number) => void;
}

const FreelancerList: React.FC<Props> = ({ freelancers, onDelete }) => {
  return (
    <div className="freelancer-list-container"> {/* Замість inline стилів */}
      <h2 className='Header'>Registered Freelancers</h2>
      {freelancers.map((freelancer, index) => (
        <div key={index} className="freelancer-card"> {/* Замість inline стилів */}
          <h3>Freelancer {index + 1}</h3>
          <p><strong>Name:</strong> {freelancer.firstName} {freelancer.lastName}</p>
          <p><strong>Age:</strong> {freelancer.age}</p>
          <p><strong>Skills:</strong> {freelancer.skills.join(', ')}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FreelancerList;
