import pool from "../../db/db";

import { getNotesOfUser } from "./queries";

function getNotesOfUser(req, res) {
    pool.query(getNotesOfUser, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    });
}

export { getNotesOfUser };