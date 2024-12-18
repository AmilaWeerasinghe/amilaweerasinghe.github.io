import React from 'react';
import { animated } from '@react-spring/web';
import { Box, Typography } from '@mui/material';
import './SkillsComponent.css';
import { useAnimationProps } from '../utils/animationUtils';
import VoteComponent from '../VoteComponent/VoteComponent';
import { topSkills, bottomSkills } from '../../constants/skills.consts';

const SkillsComponent: React.FC = () => {
    const { topSkillsProps, bottomSkillsProps, logoAnimationProps } = useAnimationProps();
    

  return (
    <Box>
    <Box className="topskills-container" sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', padding: 2 , mt: 10 }}>
      {topSkills.map((skill) => (
        <animated.div key={skill.name} style={topSkillsProps} className="topskill-item">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2 }}>
            <Box sx={{ width: 100, height: 100, marginBottom: 1 }}>
              <animated.img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" style={logoAnimationProps}/>
            </Box>
            <Typography variant="h6">{skill.name}</Typography>
          </Box>
        </animated.div>
      ))}
    </Box>
    <Box className="bottomskills-container" sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', padding: 2 , mt: 10 }}>
    {bottomSkills.map((skill) => (
      <animated.div key={skill.name} style={bottomSkillsProps} className="bottomskill-item">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2 }}>
          <Box sx={{ width: 100, height: 100, marginBottom: 1 }}>
            <animated.img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo"style={logoAnimationProps}/>
          </Box>
          <Typography variant="h6">{skill.name}</Typography>
        </Box>
      </animated.div>
    ))}
  </Box>
  <VoteComponent />
  </Box>
  );
};

export default SkillsComponent;