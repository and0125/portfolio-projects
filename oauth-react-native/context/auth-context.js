// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create the Authentication Context
export const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: false,
    user: null,
    loading: true,
  });

  // Function to load stored token on app startup
  useEffect(() => {
    const loadToken = async () => {
      try {
        // Load token from secure storage
        const token = await SecureStore.getItemAsync("userToken");

        // If token exists, also load basic user info from AsyncStorage
        if (token) {
          const userString = await AsyncStorage.getItem("userData");
          const user = userString ? JSON.parse(userString) : null;

          setAuthState({
            token,
            authenticated: true,
            user,
            loading: false,
          });
        } else {
          setAuthState({
            token: null,
            authenticated: false,
            user: null,
            loading: false,
          });
        }
      } catch (error) {
        console.log("Error loading auth token:", error);
        setAuthState({
          token: null,
          authenticated: false,
          user: null,
          loading: false,
        });
      }
    };

    loadToken();
  }, []);

  // Sign in function
  const signIn = async (token, user) => {
    try {
      // Save token in secure storage
      await SecureStore.setItemAsync("userToken", token);

      // Save non-sensitive user data in AsyncStorage
      await AsyncStorage.setItem("userData", JSON.stringify(user));

      // Update auth state
      setAuthState({
        token,
        authenticated: true,
        user,
        loading: false,
      });

      return true;
    } catch (error) {
      console.log("Error signing in:", error);
      return false;
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      // Remove token from secure storage
      await SecureStore.deleteItemAsync("userToken");

      // Remove user data from AsyncStorage
      await AsyncStorage.removeItem("userData");

      // Update auth state
      setAuthState({
        token: null,
        authenticated: false,
        user: null,
        loading: false,
      });

      return true;
    } catch (error) {
      console.log("Error signing out:", error);
      return false;
    }
  };

  // Register function (example)
  const register = async (userData, token) => {
    try {
      // In a real app, you would make an API call to register the user
      // This is a simplified example
      return await signIn(token, userData);
    } catch (error) {
      console.log("Error registering:", error);
      return false;
    }
  };

  // Provide the auth context to children components
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
