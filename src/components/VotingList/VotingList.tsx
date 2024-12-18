import { Box, Typography, FormControl, FormControlLabel , Radio, RadioGroup, Button, Alert } from '@mui/material';
import { topSkills, bottomSkills } from '../../constants/skills.consts';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { voteForSkillsInterface } from '../../interfaces/voteForSkillsInterface';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/api.consts';

const skills = [...topSkills, ...bottomSkills];

const VotingList = () => {
    //control the use selection from button group
    const [ selectedSkill, setSelectedSkill ] = useState<string | null>(null);
    const [ queryParams ] = useSearchParams();
    const [ error, setError ] = useState<string | null> (null);
    const [ loading, setLoading ] = useState<boolean>(true);

    const handleSelection = ( event : React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSkill(event.target.value);
    }

    const handleVote = async () => {
        const userId = queryParams.get('googleId');

        if(selectedSkill && userId) {
            const payload:voteForSkillsInterface = {
                skillId: selectedSkill,
                userId,
            };

            if(payload) {
                try {
                    setLoading(true);
                    const response = await axios.post(`${API_BASE_URL}/api/skills/vote`, payload);
                    if(response.status === 200) {
                        setError(null);
                    }
                } catch (error: any) {
                
                    if(error.status === 400) {
                        setError(error.response.data.error);
                        return;
                    }
                    setError(error.response.data.error);
                } finally {
                    setLoading(false);
                }
        }
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
            <Button disabled={!selectedSkill && !error && !loading} variant='contained' color='primary' onClick={handleVote} sx={{ fill: 'blue'}}>Vote</Button>
            {!loading && error && <Alert severity="error">{error}</Alert>}
        </Box>
    )
}

export default VotingList;