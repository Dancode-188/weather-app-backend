const app = require('./app');

const port = app.get('port');

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Server error handling
server.on('error', (err) => {
  console.error('Server error:', err);
});
