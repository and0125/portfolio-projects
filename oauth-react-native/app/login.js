import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Title, Text } from "react-native-paper";
import { router } from "expo-router";
import { useAuth } from "../context/auth-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn, authState } = useAuth();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (authState.authenticated && !authState.loading) {
      router.replace("/");
    }
  }, [authState.authenticated, authState.loading]);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // In a real app, you would make an API call here
      // This is simulated for demonstration
      setTimeout(async () => {
        // Simulate successful login
        const user = { id: "123", email, name: "Demo User" };
        const token = "demo-token-123456";

        const success = await signIn(token, user);

        if (success) {
          router.replace("/");
        } else {
          Alert.alert("Error", "Failed to sign in");
        }

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Login error:", error);
      Alert.alert("Error", "An error occurred during login");
      setLoading(false);
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Welcome Back</Title>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          loading={loading}
          disabled={loading}
          style={styles.button}
        >
          Sign In
        </Button>

        <Button
          mode="text"
          onPress={handleRegister}
          disabled={loading}
          style={styles.button}
        >
          Create Account
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  form: {
    width: "100%",
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});
