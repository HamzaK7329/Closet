// app/auth/signup.tsx
import { View, Text, TextInput, StyleSheet, Pressable, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    Alert.alert("Signed up (test only)", `Welcome ${fullName}`);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </Pressable>

      <View style={styles.illustrationContainer}>
        {/* Illustration would be here */}
      </View>

      <ScrollView 
        style={styles.formContainerScroll}
        contentContainerStyle={styles.formScrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput
            placeholder="Taras Shevchenko"
            placeholderTextColor="#aaa"
            style={styles.input}
            onChangeText={setFullName}
            value={fullName}
          />
          
          <Text style={styles.inputLabel}>Email adress</Text>
          <TextInput
            placeholder="sheva8228@mail.com"
            placeholderTextColor="#aaa"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="***************"
              placeholderTextColor="#aaa"
              style={[styles.input, { flex: 1, marginBottom: 0, paddingRight: 40 }]}
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <FontAwesome
                name={showPassword ? "eye-slash" : "eye"}
                size={20}
                color="#888"
              />
            </Pressable>
          </View>

          <Pressable onPress={handleSignup} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </Pressable>

          <Text style={styles.dividerText}>Or</Text>

          <View style={styles.socialContainer}>
            <Pressable style={styles.socialButton}>
              <AntDesign name="google" size={24} color="#EA4335" />
            </Pressable>
            <Pressable style={styles.socialButton}>
              <FontAwesome name="apple" size={24} color="#000" />
            </Pressable>
            <Pressable style={styles.socialButton}>
              <FontAwesome name="facebook" size={24} color="#1877F2" />
            </Pressable>
          </View>

          <Pressable onPress={() => router.replace("/auth/signin")}>
            <Text style={styles.bottomText}>
              Already have an account? <Text style={styles.highlight}>Log In</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A5ACD",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    backgroundColor: "#FFCC33",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationContainer: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainerScroll: {
    height: "70%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  formScrollContent: {
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 40,
  },
  inputLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    height: "100%",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#FFCC33",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  dividerText: {
    color: "#999",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  highlight: {
    color: "#FFCC33",
    fontWeight: "bold",
  },
});
