import { getFirestore, writeBatch } from "firebase/firestore";

import { app } from "../app";

const db = getFirestore(app);
const batch = writeBatch(db);

export { db, batch };
