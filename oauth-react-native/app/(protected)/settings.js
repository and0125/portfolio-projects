import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { List, Divider, Switch, Button, Text } from "react-native-paper";
import { useAuth } from "../../context/auth-context";
import { router } from "expo-router";

export default function SettingsScreen() {
  const { signOut, authState } = useAuth();
  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [biometricLogin, setBiometricLogin] = React.useState(false);

  const handleSignOut = async () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Sign Out",
          onPress: async () => {
            const success = await signOut();
            if (success) {
              router.replace("/login");
            } else {
              Alert.alert("Error", "Failed to sign out");
            }
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Account</Text>

      <List.Item
        title="Email"
        description={authState.user?.email || "user@example.com"}
        left={(props) => <List.Icon {...props} icon="email" />}
      />

      <List.Item
        title="Change Password"
        left={(props) => <List.Icon {...props} icon="lock" />}
        onPress={() =>
          Alert.alert("Info", "Password change would be implemented here")
        }
      />

      <Divider />

      <Text style={styles.sectionTitle}>Preferences</Text>

      <List.Item
        title="Push Notifications"
        left={(props) => <List.Icon {...props} icon="bell" />}
        right={() => (
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
          />
        )}
      />

      <List.Item
        title="Dark Mode"
        left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
        right={() => <Switch value={darkMode} onValueChange={setDarkMode} />}
      />

      <List.Item
        title="Biometric Login"
        left={(props) => <List.Icon {...props} icon="fingerprint" />}
        right={() => (
          <Switch value={biometricLogin} onValueChange={setBiometricLogin} />
        )}
      />

      <Divider />

      <Text style={styles.sectionTitle}>Support</Text>

      <List.Item
        title="Help Center"
        left={(props) => <List.Icon {...props} icon="help-circle" />}
        onPress={() =>
          Alert.alert("Info", "Help Center would be implemented here")
        }
      />

      <List.Item
        title="Report a Bug"
        left={(props) => <List.Icon {...props} icon="bug" />}
        onPress={() =>
          Alert.alert("Info", "Bug reporting would be implemented here")
        }
      />

      <List.Item
        title="Privacy Policy"
        left={(props) => <List.Icon {...props} icon="shield" />}
        onPress={() =>
          Alert.alert("Info", "Privacy policy would be displayed here")
        }
      />

      <Divider style={{ marginVertical: 20 }} />

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          buttonColor="#f44336"
          onPress={handleSignOut}
          style={styles.signOutButton}
        >
          Sign Out
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  sectionTitle: {
    fontSize: 14,
    color: "#3498db",
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  buttonContainer: {
    padding: 16,
    marginBottom: 30,
  },
  signOutButton: {
    paddingVertical: 6,
  },
});
