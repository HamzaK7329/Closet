import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function DashboardLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: "#FFCC33",
        headerStyle: {
          backgroundColor: "#6A5ACD",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
          shadowRadius: 20,
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: "Closet",
          headerTitle: "Acloset",
          tabBarIcon: ({focused, color}) => (
            <Ionicons name={focused ? "shirt" : "shirt-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="outfits" 
        options={{
          title: "Outfits",
          headerTitle: "Outfits",
          tabBarIcon: ({focused, color}) => (
            <Ionicons name={focused ? "calendar" : "calendar-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="add" 
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Ionicons 
              name="add-circle" 
              size={56} 
              color="#FFCC33" 
              style={styles.addButton} 
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="preloved" 
        options={{
          title: "Preloved",
          headerTitle: "Preloved",
          tabBarIcon: ({focused, color}) => (
            <Ionicons name={focused ? "heart" : "heart-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: "Profile",
          headerTitle: "Profile",
          tabBarIcon: ({focused, color}) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    bottom: 12,
  },
}); 