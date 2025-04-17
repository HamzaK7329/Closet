import { View, Text, Image, StyleSheet, ScrollView, Pressable, StatusBar, FlatList } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

// Helper function to format date like "Wed Nov 23"
const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Define the type for clothing items
type ClothingItem = {
  id: number;
  image: any; // Using 'any' for image source is common practice
};

export default function ClosetScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Closet');
  
  const today = new Date();
  const formattedDate = formatDate(today);
  
  // Mock data for clothing items - using placeholder-clothing.png
  const clothingItems: ClothingItem[] = [
    { id: 1, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 2, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 3, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 4, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 5, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 6, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 7, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 8, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 9, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 10, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 11, image: require('../../assets/images/placeholder-clothing.png') },
    { id: 12, image: require('../../assets/images/placeholder-clothing.png') },
  ];

  const openSettingsScreen = () => {
    router.push('/dashboard/profile'); // Reusing profile screen for settings
  };

  const renderClothingItem = ({ item }: { item: ClothingItem }) => (
    <View style={styles.clothItem}>
      <Image source={item.image} style={styles.clothImage} />
    </View>
  );

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Acloset</Text>
        <View style={styles.headerIcons}>
          <Pressable style={styles.iconButton} onPress={openSettingsScreen}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </Pressable>
        </View>
      </View>

      {/* User Profile - simplified */}      
      <View style={styles.profileSection}>
        <Image 
          source={require('../../assets/images/icon.png')}
          style={styles.profileImage} 
        />
        <Text style={styles.username}>chloe03</Text>
      </View>

      {/* Date display - simplified */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <Pressable 
          style={[styles.tab, activeTab === 'Closet' && styles.activeTab]}
          onPress={() => setActiveTab('Closet')}
        >
          <Text style={[styles.tabText, activeTab === 'Closet' && styles.activeTabText]}>Closet</Text>
        </Pressable>
        
        <Pressable 
          style={[styles.tab, activeTab === 'Outfits' && styles.activeTab]}
          onPress={() => setActiveTab('Outfits')}
        >
          <Text style={[styles.tabText, activeTab === 'Outfits' && styles.activeTabText]}>Outfits</Text>
        </Pressable>
      </View>

      {/* Content area based on active tab */}
      {activeTab === 'Closet' ? (
        <FlatList
          data={clothingItems}
          renderItem={renderClothingItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.clothingGrid}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.placeholderContent}>
          <Text style={styles.placeholderText}>Outfits coming soon!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 5,
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  username: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  dateContainer: {
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 12,
    marginRight: 30,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#333',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  activeTabText: {
    color: '#333',
    fontWeight: 'bold',
  },
  clothingGrid: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  clothItem: {
    flex: 1,
    margin: 4,
    height: 180,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clothImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  placeholderContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
  }
}); 