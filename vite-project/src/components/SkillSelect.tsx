import React from 'react';

interface SkillsSelectProps {
  selectedSkills: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SkillsSelect: React.FC<SkillsSelectProps> = ({ selectedSkills, onChange }) => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Django',
    'Delfi',
    'SQL'
  ];

  return (
    <select id="skills" name="skills" multiple value={selectedSkills} onChange={onChange} required>
      {skills.map((skill, index) => (
        <option key={index} value={skill}>{skill}</option>
      ))}
    </select>
  );
};

export default SkillsSelect;
