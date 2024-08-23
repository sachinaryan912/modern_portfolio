import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function SkillChips({ skills }) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {skills.map((skill, index) => (
        <Chip
          key={index}
          avatar={<Avatar alt={skill.tag} src={skill.logo} />}
          label={skill.tag}
          
        style={{color: "#fff", margin: "5px", border: "1px solid #303030", padding: "2px",height: "40px"}}/>
      ))}
    </Stack>
  );
}
