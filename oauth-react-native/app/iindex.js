import { Redirect } from "expo-router";
import { useAuth } from "../src/context/AuthContext";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const { authState } = useAuth();

  // Show loading indicator while checking authentication
  if (authState.loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  // Redirect based on authentication status
  return authState.authenticated ? (
    <Redirect href="/(tabs)/" />
  ) : (
    <Redirect href="/login" />
  );
}
