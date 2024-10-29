import { Router } from "express";

import { getNotesOfUser } from "./controllers";

const router = Router();

router.get('/', getNotesOfUser);

export default router;
