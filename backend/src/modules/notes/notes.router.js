import { Router } from "express";

import { getNotesOfUser } from "./controllers.js";

const router = Router();

router.get('/:id', getNotesOfUser);

export default router;
