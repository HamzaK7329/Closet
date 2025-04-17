import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        {/* Illustration would be here */}
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Let's get started!</Text>
        
        <Pressable style={styles.primaryButton} onPress={() => router.push("/auth/signup")}>
          <Text style={styles.primaryButtonText}>Sign Up</Text>
        </Pressable>
        
        <Text style={styles.alreadyHaveAccount}>
          Already have an account? <Text style={styles.logInText} onPress={() => router.push("/auth/signin")}>Log In</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A5ACD",
  },
  illustrationContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: "#FFCC33",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  alreadyHaveAccount: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
  },
  logInText: {
    color: "#fff",
    fontWeight: "bold",
  },
}); 