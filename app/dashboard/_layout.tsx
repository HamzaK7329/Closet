import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

export default function DashboardLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: "#6A5ACD",
        tabBarInactiveTintColor: "#999",
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerShadowVisible: false,
        headerTintColor: "#333",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#eee",
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons name={focused ? "shirt" : "shirt-outline"} size={24} color={color} />
              <Text style={[styles.tabLabel, { color }]}>Closet</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen 
        name="add" 
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.addButtonContainer}>
              <Ionicons 
                name="add" 
                size={30} 
                color="#fff" 
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen 
        name="feed" 
        options={{
          headerTitle: "Feed",
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons name={focused ? "newspaper" : "newspaper-outline"} size={24} color={color} /> 
              <Text style={[styles.tabLabel, { color }]}>Feed</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen name="profile" options={{ href: null }} />
      <Tabs.Screen name="outfits" options={{ href: null }} />
      <Tabs.Screen name="preloved" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    backgroundColor: "#333",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    bottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
  },
}); 