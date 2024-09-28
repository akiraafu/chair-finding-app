import { useState, useEffect } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

/**
 * Custom React hook for handling user signup functionality
 * @returns {Object} An object containing error state, pending state, and signup function
 * @returns {string|null} error - Error message if signup fails, null otherwise
 * @returns {boolean} isPending - Indicates if signup process is in progress
 * @returns {Function} signup - Async function to handle user signup
 */
export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  ```
  /**
   * Handles user signup process including account creation, thumbnail upload, and user document creation
   * @param {string} email - User's email address
   * @param {string} password - User's chosen password
   * @param {string} displayName - User's display name
   * @param {File} thumbnail - User's profile picture file
   * @returns {Promise<void>} No return value, but updates state and dispatches login action on success
   */
  
  ```  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);
    try {
      //signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("could not complete signup");
      }

      //upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      //add display name to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      //create a user document
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imgUrl,
      });

      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  /**
   /**
    * Returns a cleanup function that sets the cancelled state to true.
    * @returns {Function} A function that, when called, sets isCancelled to true.
    */
   * Sets up a cleanup function for the component
   * @returns {void} No return value
   */
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return {
    error,
    isPending,
    signup,
  };
};
