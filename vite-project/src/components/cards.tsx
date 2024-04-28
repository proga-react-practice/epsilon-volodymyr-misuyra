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
    <Box sx={{ ml:'16%', mt:'10%' }}>
      <Typography sx={{ fontSize: '40px', marginBottom: '18px', fontFamily:'Montserrat',}} color="primary"><strong>Registered Freelancers</strong></Typography>
      {freelancers.map((freelancer, index) => (
        <Card key={index} className="freelancer-card" sx={{width:'500px', mb:'24px', height:'180px'}}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 1,fontFamily:'Montserrat' }}><strong>Freelancer {index + 1}</strong></Typography>
            <Typography sx={{mt:'12px',fontFamily:'Montserrat'}} ><strong>Name:</strong> {freelancer.firstName} {freelancer.lastName}</Typography>
            <Typography sx={{mt:'12px',fontFamily:'Montserrat'}}><strong>Age:</strong> {freelancer.age}</Typography>
            <Typography sx={{mt:'12px',fontFamily:'Montserrat'}}><strong>Skills:</strong> {freelancer.skills.join(', ')}</Typography>
            <IconButton sx={{ml:'420px', mt:'-270px' }} onClick={() => onDelete(index)} color="primary"><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FreelancerList;
