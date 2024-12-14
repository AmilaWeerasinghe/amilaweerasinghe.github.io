import React from 'react';
import { animated } from '@react-spring/web';
import { Box, Typography } from '@mui/material';
import ReactLogo from '../../assets/logos/react.svg';
import NodeLogo from '../../assets/logos/nodejs.svg';
import TsLogo from '../../assets/logos/typescript.svg';
import MongoLogo from '../../assets/logos/mongodb.svg';
import ReduxLogo from '../../assets/logos/redux.svg';
import AwsLogo from '../../assets/logos/aws.svg';
import './SkillsComponent.css';
import { useAnimationProps } from '../utils/animationUtils';

const topSkills = [
  { name: 'ReactJS', logo: ReactLogo },
  { name: 'NodeJS', logo: NodeLogo },
  { name: 'AWS', logo: AwsLogo }
];

const bottomSkills = [
  { name: 'TypeScript', logo: TsLogo },
  { name: 'MongoDB', logo: MongoLogo },
  { name: 'Redux', logo: ReduxLogo }
];

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
  </Box>
  );
};

export default SkillsComponent;