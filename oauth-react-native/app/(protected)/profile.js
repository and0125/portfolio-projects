import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Card, Title, Paragraph, Button } from "react-native-paper";
import { useAuth } from "../../context/auth-context";

export default function ProfileScreen() {
  const { authState } = useAuth();
  const user = authState.user || { name: "User", email: "user@example.com" };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://api.placeholder.com/400/320" }}
            style={styles.avatar}
          />
        </View>

        <Card.Content style={styles.cardContent}>
          <Title style={styles.name}>{user.name}</Title>
          <Paragraph style={styles.email}>{user.email}</Paragraph>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>127</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>1,254</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>348</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>

          <Paragraph style={styles.bio}>
            This is a sample user bio. In a real app, this would be customizable
            by the user and would contain information about them.
          </Paragraph>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Button mode="contained" style={styles.button}>
            Edit Profile
          </Button>
          <Button mode="outlined" style={styles.button}>
            Share
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    borderRadius: 10,
    elevation: 3,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e0e0e0",
  },
  cardContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  email: {
    color: "#666",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#666",
    fontSize: 12,
  },
  bio: {
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  actions: {
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});
