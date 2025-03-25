# Notes

Implementing authentication and authorization in a react native application following a Claude Tutorial.

## TLDR

This set of notes goes through the process of:

- starting the project
- setting up the tab layout
- creating the AuthContext
- setting up page components

## Setup

- `npx create-expo-app@latest ./ --template blank`
- required packages:
  - react-native-async-storage: for storing non-sensitive user data like preferences
  - expo-secure-store: for securely storing sensitive info like tokens
  - react navigation/native and react-navigation/native-stack: for implementing navigation between auth screens and protected content
  - react-native-screens and react-native-safe-area-context: required for react-navigation
  - react-native-keyobard-aware-scroll-view: helps with forms that need to scroll when the keyboard appears.
  - react-native-paper: optional UI library for building forms and buttons

```text
# Install required packages

npm install @react-native-async-storage/async-storage expo-secure-store react-native-keyboard-aware-scroll-view

# Install navigation packages (we'll need these for auth flow)

npm install @react-navigation/native @react-navigation/native-stack

# Install Expo modules for navigation

npx expo install react-native-screens react-native-safe-area-context

# Optional: Install UI library if preferred (e.g., React Native Paper)

npm install react-native-paper
```

## Transition to Tabs structure

This tabs structure uses the Expo Router, which is expo's file based routing solution that supports tab navigation.

### Install Dependencies

Install Expo Router Dependencies

- npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
  Add expo-router dev dependency

- npm install -D @types/react-native

### File Setup

- remove `App.js`
- add `app/` dir
- add the following files:
  - app/\_layout.js - root layout with AuthProvider
  - app/index.js - entry point that redirects based on auth state
  - app/login - login screen
  - app/register - registration screen
  - app/(protected)/\_layout.js - layout for protected tabs
  - app/(protected)/index - home tab
  - app/(protected)/profile - profile tab
  - app/(protected)/settings - settings tab

Also we change the index.js file to:

```javascript
import "expo-router/entry";
```

## Create Authentication Context

This file is a crucial part of this system. It creates a react context that will be accessible throughout the app, managing and providing authentication related functionality.

This features:

- state management for tracking the users' token, user data, and loading status
- secure storage: uses expo-secure-store for storing sensitive auth tokens securely and async storage for non-sensitive user data
- core authentication functions:
  - signin: stores token and user data, updates auth state
  - signout: remove stored data and updates auth state
  - register: example function for user registration
- a custom hook that provides the `useAuth()` hook as a way to easily access auth functions and state anywhere in the app.
- auto-loading: automatically checks for existing auth tokens when the app loads.

## Registration screen

This screen is the last screen for the basic authentication flow. This screen has features to:

- collect user information
- validate the input
- placeholders for the authentication from the `AuthContext` object
- Navgiation for going to the login screen, and redirection to the home screen if already authenticated; navigates to home screen after a successful registration
- uses a keyboardawarescrollview to handle the keyboard appearance; provides clear error messages, and shows a loading indicator.
