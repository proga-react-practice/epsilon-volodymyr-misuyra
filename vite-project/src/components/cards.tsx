import React from 'react';
import { Typography, Button, Card, CardContent, Box } from '@mui/material';
import './FreelancerList.css';
import { Freelancer } from './Freelancer';

interface Props {
  freelancers: Freelancer[];
  onDelete: (index: number) => void;
}

const FreelancerList: React.FC<Props> = ({ freelancers, onDelete }) => {
  return (
    <Box sx={{ ml:'15%', mt:'8%' }}>
      <Typography sx={{ fontSize: '38px', color: '#6a0dad', marginBottom: '26px', fontFamily:'Roboto' }}>Registered Freelancers</Typography>
      {freelancers.map((freelancer, index) => (
        <Card key={index} className="freelancer-card">
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h3" sx={{ mb: 1 }}>Freelancer {index + 1}</Typography>
            <Typography><strong>Name:</strong> {freelancer.firstName} {freelancer.lastName}</Typography>
            <Typography><strong>Age:</strong> {freelancer.age}</Typography>
            <Typography><strong>Skills:</strong> {freelancer.skills.join(', ')}</Typography>
            <Button variant="contained" color="error" onClick={() => onDelete(index)}>Delete</Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FreelancerList;
