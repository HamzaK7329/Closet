import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
            backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
            backgroundColor: "#25292e",
        },
    }}>
      <Tabs.Screen name="index" 
      options={{
        headerTitle: "index",
        tabBarIcon: ({focused, color}) => <Ionicons 
        name={focused ? "home-sharp" : "home-outline"} 
        size={24} />,

      }}/>
      <Tabs.Screen name="about" 
      options={{
        headerTitle: "about",
        tabBarIcon: ({focused, color}) => <Ionicons 
        name={focused ? "information-circle" : "information-circle-outline"} 
        size={24} />,

      }}/>
    </Tabs>
  )
}
