import express, { Request, Response } from 'express';
import users from "../src/routes/users";
const app = express();
const port: number = 8080;
app.use(express.json());


app.use('/api', users)
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
