import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Title, Text } from "react-native-paper";
import { router } from "expo-router";
import { useAuth } from "../context/auth-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, authState } = useAuth();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (authState.authenticated && !authState.loading) {
      router.replace("/");
    }
  }, [authState.authenticated, authState.loading]);

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return false;
    }

    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters");
      return false;
    }

    // Basic email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // In a real app, you would make an API call here
      // This is simulated for demonstration
      setTimeout(async () => {
        // Simulate successful registration
        const user = { id: "123", name, email };
        const token = "demo-token-123456";

        const success = await register(user, token);

        if (success) {
          router.replace("/");
        } else {
          Alert.alert("Error", "Failed to register");
        }

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Registration error:", error);
      Alert.alert("Error", "An error occurred during registration");
      setLoading(false);
    }
  };

  const handleLogin = () => {
    router.replace("/login");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Create Account</Title>
      <Text style={styles.subtitle}>Sign up to get started</Text>

      <View style={styles.form}>
        <TextInput
          label="Full Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          autoCapitalize="words"
          style={styles.input}
        />

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

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleRegister}
          loading={loading}
          disabled={loading}
          style={styles.button}
        >
          Create Account
        </Button>

        <Button
          mode="text"
          onPress={handleLogin}
          disabled={loading}
          style={styles.button}
        >
          Already have an account? Sign In
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
