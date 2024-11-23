import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"

export const Hoisting = () => {
    const codeSnippet1 = `
    console.log(x); // undefined
    var x =10;
    console.log(x); // 10`

    const codeSnippet2 = `
    myFunction(); // Function is called before declaration
    function myFunction(){
        console.log('Function is hoisted');
    }`

    return (
        <Box sx={{p : 10}}>
            <Typography>Hoisting</Typography>

            <Typography>Mechanisam where variables and function declarations are moved to top of the containing scope before code executed.</Typography>
            <Typography>Function declarations are hoisted not initialization</Typography>
            <Typography>Declaration: defining name and type without a value</Typography>
            <Typography>Initialization: Assinging a value at time of declaration or later</Typography>
            <Typography>Typically function declarations and initialization is done at same time, except function expressions can be assigned to variables later</Typography>

            <Typography> Declarations are hosited not the initilization ( Variables and function expressions) </Typography>
            <SyntaxHighlighter language="javascript">
                {codeSnippet1}
            </SyntaxHighlighter>

            <Typography>Function declarations are hoisted entirely</Typography>
            <SyntaxHighlighter language="javascript">
                {codeSnippet2}
            </SyntaxHighlighter>

    <TableContainer component={Paper} sx={{mt: 1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Feature</TableCell>
              <TableCell>var</TableCell>
              <TableCell>let</TableCell>
              <TableCell>const</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Scope</TableCell>
              <TableCell>Function-scoped</TableCell>
              <TableCell>Block-scoped</TableCell>
              <TableCell>Block-scoped</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hoisting</TableCell>
              <TableCell>Declaration hoisted, initialized with undefined(Error: Undefined)</TableCell>
              <TableCell>Declaration hoisted, but not initialized(Error: ReferenceError)</TableCell>
              <TableCell>Declaration hoisted, but not initialized(Error: ReferenceError)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Re-declaration</TableCell>
              <TableCell>Allowed</TableCell>
              <TableCell>Not allowed</TableCell>
              <TableCell>Not allowed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Initialization</TableCell>
              <TableCell>Optional</TableCell>
              <TableCell>Optional</TableCell>
              <TableCell>Required</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Re-assignment</TableCell>
              <TableCell>Allowed</TableCell>
              <TableCell>Allowed</TableCell>
              <TableCell>Not allowed( Error: TypeError)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        </Box>
    )
}