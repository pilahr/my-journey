import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3fa4AFbXgaeXx35FCEZgmV-VzoSSoiZs",
  authDomain: "my-journey-20eb0.firebaseapp.com",
  projectId: "my-journey-20eb0",
  storageBucket: "my-journey-20eb0.appspot.com",
  messagingSenderId: "597884602497",
  appId: "1:597884602497:web:d6efc1661036c665ed6580",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;