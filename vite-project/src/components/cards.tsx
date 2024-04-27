import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import './FreelancerList.css';
import { Freelancer } from './Freelancer';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  freelancers: Freelancer[];
  onDelete: (index: number) => void;
}

const FreelancerList: React.FC<Props> = ({ freelancers, onDelete }) => {
  return (
    <Box sx={{ ml:'13%', mt:'6%' }}>
      <Typography sx={{ fontSize: '38px', color: '#6a0dad', marginBottom: '26px', fontFamily:'Roboto' }}>Registered Freelancers</Typography>
      {freelancers.map((freelancer, index) => (
        <Card key={index} className="freelancer-card" sx={{width:'500px', mb:'24px', height:'180px'}}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>Freelancer {index + 1}</Typography>
            <Typography sx={{mt:'12px'}}><strong>Name:</strong> {freelancer.firstName} {freelancer.lastName}</Typography>
            <Typography sx={{mt:'12px'}}><strong>Age:</strong> {freelancer.age}</Typography>
            <Typography sx={{mt:'12px'}}><strong>Skills:</strong> {freelancer.skills.join(', ')}</Typography>
            <IconButton sx={{ml:'420px', mt:'-270px' }} onClick={() => onDelete(index)} color="error"><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FreelancerList;
