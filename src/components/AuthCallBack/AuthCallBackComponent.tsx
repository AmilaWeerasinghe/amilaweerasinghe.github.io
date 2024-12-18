import { useSearchParams, useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";

// Component to handle the callback from the Auth0
const AuthCallBackComponent = () => {
    const [ queryParams ] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = queryParams.get('token');
        const userId = queryParams.get('userId');
        if(token && userId) {
            localStorage.setItem('token', token);
            navigate(`/vote?googleId=${userId}`);
        }
    }, [queryParams,navigate])

    return (
        <Box>
            <CircularProgress color="success"/>
        </Box>
    )

}

export default AuthCallBackComponent;