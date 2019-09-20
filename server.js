const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => res.send('API Running'));
app.use('/api/user', require('./routes/api/user'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
