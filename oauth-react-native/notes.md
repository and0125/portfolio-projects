# Notes

Implementing authentication and authorization in a react native application following a Claude Tutorial.

## Setup

- `npx create-expo-app@latest ./ --template blank`
- required packages:
  - react-native-async-storage: for storing non-sensitive user data like preferences
  - expo-secure-store: for securely storing sensitive info like tokens
  - react navigation/native and react-navigation/native-stack: for implementing navigation between auth screens and protected content
  - react-native-screens and react-native-safe-area-context: required for react-navigation
  - react-native-keyobard-aware-scroll-view: helps with forms that need to scroll when the keyboard appears.
  - react-native-paper: optional UI library for building forms and buttons

```markdown
# Install required packages

npm install @react-native-async-storage/async-storage expo-secure-store react-native-keyboard-aware-scroll-view

# Install navigation packages (we'll need these for auth flow)

npm install @react-navigation/native @react-navigation/native-stack

# Install Expo modules for navigation

npx expo install react-native-screens react-native-safe-area-context

# Optional: Install UI library if preferred (e.g., React Native Paper)

npm install react-native-paper
```
