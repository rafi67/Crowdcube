import React, { useState } from "react";
import { createContext } from "react";
import { app } from "../firebase/firebase_init";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/cordova";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLoginWithLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    createUser,
    userLogin,
    userLoginWithLogin,
    logOut,
    resetPassword,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
