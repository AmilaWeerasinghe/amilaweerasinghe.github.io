import { Box, Typography } from "@mui/material"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"

export const Closure = () => {
    const codeSnippet = `
    function outerFunction(outerVariable) {

       const innerFunction = (innerVariable) => {
           console.log('Outer Variable:',outerVariable);
           console.log('Inner Variable:',innerVariable);
       }
           return innerFunction;
    }
    
    const newFunction = outerFunction('Outer Variable'); // return a function
    newFunction('Inner Variable'); //Assign inner variable to the returned function

    logs:
    Outer Variable: Outer Variable // Outer Variable is logged due to closure
    Inner Variable: Inner Variable // Inner vaiable is logged from returned inner function 
    `

    return (
        <Box sx={{p:10}}>
            <Typography variant="h4">Closure</Typography>
            <SyntaxHighlighter language="javascript">
                {codeSnippet}
            </SyntaxHighlighter>
            <Box sx={{p:2}}>
                <Typography variant="h5">Use cases</Typography>
                <Typography variant="h6">1. Event handlers</Typography>
                <Typography> React handler functions accessing state variables</Typography>
                <Typography variant="h6">2. Callback functions</Typography>
                <Typography>Callbacks such as setTimeInterval access state variables</Typography>
            </Box>

        </Box>
    )
}