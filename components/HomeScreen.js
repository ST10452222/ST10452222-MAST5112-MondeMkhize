import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, SafeAreaView, StatusBar, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectedCourse, setSelectedCourse] = useState("Starter");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate("Menu");
  };

  return (
    <LinearGradient colors={['#1a1a1a', '#2C2C2C']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <Animated.Text style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          Welcome, Chef Christoffel
        </Animated.Text>

        <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <Text style={styles.label}>Select Course:</Text>
          <Picker
            selectedValue={selectedCourse}
            onValueChange={(itemValue) => setSelectedCourse(itemValue)}
            style={styles.picker}
            dropdownIconColor="#FFD700"
          >
            <Picker.Item label="Starter - R45" value="Starter" />
            <Picker.Item label="Main - R85" value="Main" />
            <Picker.Item label="Dessert - R60" value="Dessert" />
          </Picker>

          <TouchableOpacity 
            style={[globalStyles.button, styles.button]} 
            onPress={handlePress}
            accessibilityLabel="Navigate to the menu screen"
          > 
            <Text style={globalStyles.buttonText}>View Menu</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  safeArea: { 
    flex: 1, 
    width: '100%', 
    paddingHorizontal: '5%', 
    justifyContent: 'center' 
  },
  header: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#FFD700', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  content: { 
    alignItems: 'center' 
  },
  label: { 
    fontSize: 18, 
    color: 'white', 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  picker: { 
    width: '90%', 
    height: 50, 
    color: 'white', 
    backgroundColor: '#444', 
    borderRadius: 12, 
    marginBottom: 20 
  },
  button: { 
    width: '90%', 
    marginTop: 20 
  },
});