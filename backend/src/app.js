import express from 'express';
import cors from 'cors';

import notesRouter from './modules/notes/index';

const app = express();


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API = process.env.API || '/api/v1';

async function start () {
    try {
       
        app.use(`${API}/notes`, notesRouter);        

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);            
        });

    } catch (err) {
        throw new Error(err);
    }    
};

start();
