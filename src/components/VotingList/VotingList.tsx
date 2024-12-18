import { Box, Typography, FormControl, FormControlLabel , Radio, RadioGroup, Button } from '@mui/material';
import { topSkills, bottomSkills } from '../../constants/skills.consts';
import { useState } from 'react';

const skills = [...topSkills, ...bottomSkills];

const VotingList = () => {
    //control the use selection from button group
    const [ selectedSkill, setSelectedSkill ] = useState<string | null>(null);

    const handleSelection = ( event : React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSkill(event.target.value);
    }

    const handleVote = () => {
        if(selectedSkill){
            console.log(`Voted for ${selectedSkill}`);
        }
    }

    return (
        <Box sx={{p:10}}>
            <Typography variant="h5">Votes for technologies by visitors</Typography>
            <Box>
            <FormControl>
            <RadioGroup value={selectedSkill}  onChange={handleSelection}>
                {skills.map((skill) => {
                return( 
                            <FormControlLabel
                            value={skill.name} 
                            key={skill.name}
                            control={
                                <Radio
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        color: 'white', // Change the color of the icon
                                    },
                                    '&.Mui-checked': {
                                        color: 'white', // Change the color of the checked icon
                                    }
                                    }}
                                />
                            } 
                            label={skill.name} />
                )
            })}
                </RadioGroup>
                </FormControl>
        </Box>
            <Button disabled={!selectedSkill} variant='contained' color='primary' onClick={handleVote} sx={{ fill: 'blue'}}>Vote</Button>
        </Box>
    )
}

export default VotingList;