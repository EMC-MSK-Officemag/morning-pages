import pool from "../../db/db.js";

import { getNotesOfUserQuery } from "./queries.js";

function getNotesOfUser(req, res) {
    pool.query(getNotesOfUserQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    });
}

export { getNotesOfUser };

// вытащить id из recuest
// передать id вторым параметром query 
// использовать переменную в строке запроса