import { AppOptions, cert, initializeApp } from "firebase-admin/app";

const options: AppOptions = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY!.replace(
      /\\n/g,
      "\n"
    ),
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
  }),
};

export const admin = initializeApp(options);
