import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../src/context/AuthContext";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </PaperProvider>
    </AuthProvider>
  );
}
