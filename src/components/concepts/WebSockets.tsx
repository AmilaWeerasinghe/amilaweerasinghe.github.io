import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Box, Typography } from '@mui/material';


export const WebSockets = () => {
  const codeSnippet = `
  const WebSocket = require('ws');

const server = new WebSocket.Server({ port: process.env.PORT || 8080 });
let visitorCount = 0;

server.on('connection', (ws) => {
  visitorCount++;
  console.log('Client connected. Total visitors:', visitorCount);

  // Broadcast the updated visitor count to all connected clients
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'visitorCount', count: visitorCount }));
    }
  });

  // Handle client disconnection
  ws.on('close', () => {
    visitorCount--;
    console.log('Client disconnected. Total visitors:', visitorCount);

    // Broadcast the updated visitor count to all connected clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'visitorCount', count: visitorCount }));
      }
    });
  });
});
  `;

  return (
    <Box sx={{p: 10}}>
      <Typography>WebSockets used to create duplex real time connection with node server</Typography>
      <SyntaxHighlighter language="javascript" style={solarizedlight}>
        {codeSnippet}
      </SyntaxHighlighter>
    </Box>
  );
};