import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import { useState } from "react";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function AuthScreen() {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    Alert.alert("Continue", `Phone: ${phone} (Test Only)`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in or sign up</Text>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Country/Region</Text>
        <View style={styles.countrySelector}>
          <Text style={styles.countryText}>United States (+1)</Text>
          <Ionicons name="chevron-down" size={18} color="#888" />
        </View>

        <TextInput
          style={styles.phoneInput}
          placeholder="Phone number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          onChangeText={setPhone}
        />
      </View>

      <Text style={styles.note}>
        We’ll call or text to confirm your number. Standard message and data rates apply.
      </Text>

      <Pressable onPress={handleContinue} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </Pressable>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <Pressable style={styles.socialButton}>
        <Ionicons name="mail-outline" size={20} color="#111" style={styles.icon} />
        <Text style={styles.socialText}>Continue with email</Text>
      </Pressable>

      <Pressable style={styles.socialButton}>
        <FontAwesome name="apple" size={20} color="#111" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </Pressable>

      <Pressable style={styles.socialButton}>
        <AntDesign name="google" size={20} color="#111" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Google</Text>
      </Pressable>

      <Pressable style={styles.socialButton}>
        <FontAwesome name="facebook" size={20} color="#111" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Facebook</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
    textAlign: "center",
  },
  inputWrapper: {
    backgroundColor: "#f6f6f6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  label: {
    color: "#888",
    fontSize: 13,
    marginBottom: 8,
  },
  countrySelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  countryText: {
    fontSize: 16,
    color: "#111",
  },
  phoneInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    fontSize: 16,
    color: "#111",
  },
  note: {
    fontSize: 12,
    color: "#666",
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: "#ff385c",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#888",
    fontSize: 13,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  socialText: {
    fontSize: 16,
    color: "#111",
  },
  icon: {
    marginRight: 12,
  },
});
