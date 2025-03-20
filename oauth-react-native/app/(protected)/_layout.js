import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { useAuth } from "../../src/context/AuthContext";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  const { authState } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authState.authenticated && !authState.loading) {
      router.replace("/login");
    }
  }, [authState.authenticated, authState.loading]);

  // Show nothing while loading
  if (authState.loading || !authState.authenticated) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3498db",
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
