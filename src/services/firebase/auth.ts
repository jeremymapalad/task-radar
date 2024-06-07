import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const registerWithEmail = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return {
      message: "Registration successful",
      success: true,
    };
  } catch (error) {
    console.error("Error registering with email and password", error);
    return {
      message: "Registration failed",
      success: false,
    };
  }
};

export const loginWithEmail = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return {
      message: "Log in successful",
      success: true,
    };
  } catch (error) {
    return {
      message: "Log in failed",
      success: false,
    };
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};
