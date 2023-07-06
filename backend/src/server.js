import dotenv from 'dotenv';
dotenv.config()
const port = process.env.PORT | 5001;
import app from './app.js'

app.listen(port, () => console.log(`Server is running on PORT ${port}`));