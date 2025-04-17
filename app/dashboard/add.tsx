import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddItemScreen() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>Add to Closet</Text>
        <View style={{ width: 24 }} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.addItemBox}>
          <Ionicons name="camera" size={42} color="#6A5ACD" />
          <Text style={styles.addItemText}>Take a Photo</Text>
        </View>
        
        <View style={styles.addItemBox}>
          <Ionicons name="image" size={42} color="#6A5ACD" />
          <Text style={styles.addItemText}>Choose from Gallery</Text>
        </View>
      </View>
    </View>
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
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 60,
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 24,
  },
  addItemBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    borderWidth: 2,
    borderColor: '#eee',
    borderStyle: 'dashed',
  },
  addItemText: {
    color: '#333',
    marginTop: 12,
    fontSize: 16,
    fontWeight: '500',
  },
}); 