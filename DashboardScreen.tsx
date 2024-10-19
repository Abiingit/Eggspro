import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';  // Carousel for scrolling images
import PropTypes from 'prop-types';

DashboardScreen.propTypes = {
  carouselItems: PropTypes.array.isRequired,
};


const { width: viewportWidth } = Dimensions.get('window');

const DashboardScreen = () => {
  const navigation = useNavigation();

  const carouselItems = [
    { id: 1, img: require('./assets/crimg1.png') },  // Add actual images to assets folder
    { id: 2, img: require('./assets/crimg2.png') },
    { id: 3, img: require('./assets/crimg3.png') }
  ];

  console.log("Data array:", carouselItems);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.img} style={styles.carouselImage} />
      </View>
    );
  };
  
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Section with Search Bar and Login Button */}
      <View style={styles.topBar}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => Alert.alert('Logged out!')}>
          <Text style={styles.loginButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      
      {/* Carousel Section */}
{/* Carousel Section */}
{carouselItems.length > 0 ? (
  <View style={styles.carouselContainer}>
    <Carousel
      data={carouselItems}
      renderItem={_renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth * 0.8}
    />
  </View>
) : (
  <Text>No items available</Text>
)}


      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.cardTitle}>Profile Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.cardTitle}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NotificationsScreen')}>
          <Text style={styles.cardTitle}>Notifications</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',  // Use a soft background that matches the theme
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10, // Smooth round corners
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: '#FFA07A',  // Match button color with login/signup theme
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselItem: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: 150,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#FA8072',  // Consistent with the rest of the theme
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default DashboardScreen;
