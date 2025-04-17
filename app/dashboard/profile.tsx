import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.userInfoSection}>
        <Image 
          source={require('../../assets/images/icon.png')} 
          style={styles.profileImage} 
        />
        <Text style={styles.username}>chloe03</Text>
        <Text style={styles.email}>chloe03@example.com</Text>
      </View>
      
      <View style={styles.menuSection}>
        <Pressable style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color="#6A5ACD" style={styles.menuIcon} />
          <Text style={styles.menuText}>Account Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </Pressable>
        
        <Pressable style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={24} color="#6A5ACD" style={styles.menuIcon} />
          <Text style={styles.menuText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </Pressable>
        
        <Pressable style={styles.menuItem}>
          <Ionicons name="lock-closed-outline" size={24} color="#6A5ACD" style={styles.menuIcon} />
          <Text style={styles.menuText}>Privacy & Security</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </Pressable>
      </View>
      
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Support</Text>
        
        <Pressable style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="#6A5ACD" style={styles.menuIcon} />
          <Text style={styles.menuText}>Help Center</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </Pressable>
        
        <Pressable style={styles.menuItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#6A5ACD" style={styles.menuIcon} />
          <Text style={styles.menuText}>Contact Us</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </Pressable>
        
        <Pressable style={styles.menuItem}>
          <Ionicons name="information-circle-outline" size={24} color="#6A5ACD" style={styles.menuIcon} />
          <Text style={styles.menuText}>About</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </Pressable>
      </View>
      
      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userInfoSection: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  menuSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingLeft: 8,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  logoutButton: {
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '500',
  },
}); 