import useAxiosGet from "../../hooks/useAxios";
import { Box, CircularProgress, Typography, Grid } from '@mui/material';
import { VoteResults } from "../../interfaces/voteResultsInterface";


const VoteComponent = () => {
    const { data, loading } = useAxiosGet<VoteResults[]>('https://rendernodeserver.onrender.com/api/skills');
    return (
        <Box>
        <Typography variant="h5">Votes for technologies by users</Typography>
        <Typography variant="subtitle2">powered by nodejs and mongodb via REST api designed!</Typography>
        <Box>
            {loading ? 
            <CircularProgress color="success"/>
            : <Grid container spacing={2}>
                {data && data.map((vote) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={vote.id}>
                        <Typography>
                            {vote.name} - {vote.votes}
                        </Typography>
                        </Grid>
                    )
                })}
              </Grid>}
        </Box>
        </Box>
    );
}

export default VoteComponent;