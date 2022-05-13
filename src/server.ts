import express from 'express'
import cors from 'cors'
import { routes } from './routers';
import { env } from 'process';

const app = express();

app.use(cors)
app.use(express.json())
app.use(routes)

app.listen(env.PORT, () => {
    console.log("HTTP server running")
});
 