import useAxiosGet  from "../../hooks/useAxios";
import { Box, CircularProgress, Typography, Grid, Button, Alert } from '@mui/material';
import { VoteResults } from "../../interfaces/voteResultsInterface";


const VoteComponent = () => {
    const { data, loading, error } = useAxiosGet<VoteResults[]>(`${process.env.REACT_APP_API_BASE_URL}/api/skills`);

    // function to handle vote
    const handleVote = async () => {
        // open the auth page (browser redirect in a full page for new url)
        window.location.href = `http://localhost:8000/api/auth/google`;
    }
    return (
        <Box>
        <Box display={'flex'}>
        <Typography variant="h5">Votes for technologies by visitors</Typography>
        <Button variant="contained" color="primary" sx={{ ml: 1}} onClick={handleVote}>Start Voting</Button>
        </Box>
        <Typography variant="subtitle2">powered by nodejs, mongodb via REST api and OAuth</Typography>
        <Box>
            {error && <Alert severity="error">{`Error fetching skills data:${error}`}</Alert>}
            {!error && loading ? 
            <CircularProgress color="success"/>
            : <Grid container spacing={2}>
                {data && data.map((vote) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={vote.name}>
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