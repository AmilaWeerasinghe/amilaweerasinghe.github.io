import VisitorAnalytics from "../AnalyticsComponent/AnalysticsComponent"
import { Box } from "@mui/material"



export const Footer = () => {
    return (
        <Box
          component="footer"
           sx={{
            position: 'relative',
            bottom: 0,
            width: '100%',
            backgroundColor: '#1f242d',
            textAlign: 'center',
            padding: '10px 0',
            borderTop: '1px solid #e7e7e7',
           }}
         >
             <VisitorAnalytics />
         </Box>
    )
}