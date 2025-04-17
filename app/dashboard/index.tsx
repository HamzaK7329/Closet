import { View, Text, Image, StyleSheet, ScrollView, Pressable, StatusBar } from 'react-native';
import { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ClosetScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('Closet');
  
  // Mock data for weather
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentDay = days[today.getDay()];
  const currentDate = today.getDate();
  const currentMonth = months[today.getMonth()];
  
  // Mock data for clothing items
  const allClothes = [
    { id: 1, image: require('../../assets/images/icon.png') },
    { id: 2, image: require('../../assets/images/icon.png') },
    { id: 3, image: require('../../assets/images/icon.png') },
    { id: 4, image: require('../../assets/images/icon.png') },
    { id: 5, image: require('../../assets/images/icon.png') },
    { id: 6, image: require('../../assets/images/icon.png') },
    { id: 7, image: require('../../assets/images/icon.png') },
    { id: 8, image: require('../../assets/images/icon.png') },
  ];

  const dailyCloset = [
    { id: 1, image: require('../../assets/images/icon.png') },
    { id: 2, image: require('../../assets/images/icon.png') },
    { id: 3, image: require('../../assets/images/icon.png') },
    { id: 4, image: require('../../assets/images/icon.png') },
  ];

  const specialOccasions = [
    { id: 1, image: require('../../assets/images/icon.png') },
    { id: 2, image: require('../../assets/images/icon.png') },
    { id: 3, image: require('../../assets/images/icon.png') },
    { id: 4, image: require('../../assets/images/icon.png') },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Acloset</Text>
        <View style={styles.headerIcons}>
          <Pressable style={styles.iconButton}>
            <Ionicons name="bookmark-outline" size={24} color="#333" />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </Pressable>
        </View>
      </View>

      {/* User Profile */}
      <View style={styles.profileSection}>
        <Image 
          source={require('../../assets/images/icon.png')} 
          style={styles.profileImage} 
        />
        <View style={styles.profileInfo}>
          <Text style={styles.username}>chloe03</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={16} color="#666" />
            <Text style={styles.locationText}>New York</Text>
          </View>
        </View>
        <Pressable style={styles.analyticsButton}>
          <Text style={styles.analyticsText}>Style Analytics</Text>
          <Ionicons name="chevron-forward" size={16} color="#6A5ACD" />
        </Pressable>
      </View>

      {/* Weather Card */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.weatherCardsContainer}
      >
        <View style={styles.weatherCard}>
          <View style={styles.weatherCardHeader}>
            <View>
              <Text style={styles.weatherCardDay}>{currentDay}</Text>
              <View style={styles.dateContainer}>
                <Text style={styles.weatherCardDate}>{currentMonth} {currentDate}</Text>
                <View style={styles.todayBadge}>
                  <Text style={styles.todayText}>Today</Text>
                </View>
              </View>
            </View>
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperature}>57 / 50°F</Text>
              <MaterialCommunityIcons name="weather-partly-cloudy" size={24} color="#666" />
            </View>
          </View>
          <Pressable style={styles.calendarButton}>
            <Ionicons name="calendar-outline" size={24} color="#333" />
          </Pressable>
        </View>

        <View style={[styles.weatherCard, { marginLeft: 10 }]}>
          <View style={styles.weatherCardHeader}>
            <View>
              <Text style={styles.weatherCardDay}>Thu</Text>
              <Text style={styles.weatherCardDate}>{currentMonth} {currentDate + 1}</Text>
            </View>
            <Text style={styles.temperature}>55 / 48°F</Text>
          </View>
        </View>
      </ScrollView>

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
        
        <Pressable 
          style={[styles.tab, activeTab === 'Preloved' && styles.activeTab]}
          onPress={() => setActiveTab('Preloved')}
        >
          <Text style={[styles.tabText, activeTab === 'Preloved' && styles.activeTabText]}>Preloved</Text>
        </Pressable>
      </View>

      {/* Closet Section */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
        {/* All Clothes Section */}
        <View style={styles.clothesSection}>
          <View style={styles.clothesSectionHeader}>
            <Text style={styles.sectionTitle}>All Clothes</Text>
            <Text style={styles.itemCount}>200</Text>
          </View>
          <View style={styles.clothesGrid}>
            {allClothes.slice(0, 4).map((item) => (
              <View key={item.id} style={styles.clothItem}>
                <Image source={item.image} style={styles.clothImage} />
              </View>
            ))}
          </View>
        </View>

        {/* Daily Closet Section */}
        <View style={styles.clothesSection}>
          <View style={styles.clothesSectionHeader}>
            <Text style={styles.sectionTitle}>Daily Closet</Text>
            <Text style={styles.itemCount}>77</Text>
          </View>
          <View style={styles.clothesGrid}>
            {dailyCloset.map((item) => (
              <View key={item.id} style={styles.clothItem}>
                {item.id % 3 === 0 && (
                  <View style={styles.lockIconContainer}>
                    <Ionicons name="lock-closed" size={18} color="#fff" />
                  </View>
                )}
                <Image source={item.image} style={styles.clothImage} />
              </View>
            ))}
          </View>
        </View>

        {/* Special Occasions Section */}
        <View style={styles.clothesSection}>
          <View style={styles.clothesSectionHeader}>
            <Text style={styles.sectionTitle}>Special Occasions</Text>
            <Text style={styles.itemCount}>24</Text>
          </View>
          <View style={styles.clothesGrid}>
            {specialOccasions.map((item) => (
              <View key={item.id} style={styles.clothItem}>
                <Image source={item.image} style={styles.clothImage} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
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
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  appName: {
    fontSize: 24,
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
    paddingVertical: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 12,
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 3,
  },
  analyticsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  analyticsText: {
    fontSize: 14,
    color: '#6A5ACD',
    marginRight: 2,
  },
  weatherCardsContainer: {
    paddingHorizontal: 16,
    marginTop: 5,
  },
  weatherCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
  },
  weatherCardHeader: {
    flex: 1,
  },
  weatherCardDay: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  weatherCardDate: {
    fontSize: 14,
    color: '#666',
  },
  todayBadge: {
    backgroundColor: '#FFCC33',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 8,
  },
  todayText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  calendarButton: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 16,
  },
  tab: {
    paddingVertical: 12,
    marginRight: 30,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#6A5ACD',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  activeTabText: {
    color: '#333',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  clothesSection: {
    marginBottom: 24,
  },
  clothesSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemCount: {
    fontSize: 14,
    color: '#999',
  },
  clothesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  clothItem: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  clothImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  lockIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
}); 