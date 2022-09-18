const app = require('./app/app')
const PORT = process.env.PORT || 3455;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))