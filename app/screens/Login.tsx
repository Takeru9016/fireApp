import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

import List from "./List";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const auth = getAuth();

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully");
    alert("Check your emails");
  };

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully");
    // If sign-in is successful, navigate to the "My ToDo" screen
    navigation.navigate("My ToDo" as keyof typeof List);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Create account" onPress={signUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "column",
    paddingVertical: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 4,
  },
});
