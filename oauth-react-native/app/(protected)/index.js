import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/auth-context";

export default function HomeScreen() {
  const { authState } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>
        Welcome {authState.user?.name || "User"}!
      </Text>
      <Text style={styles.text}>
        This is the protected home tab that only authenticated users can see.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 20,
  },
});
