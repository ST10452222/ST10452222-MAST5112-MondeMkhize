import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function DishItem({ name, description, course }) {
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.dishItem, { opacity: fadeAnim }]}>
      <Text style={styles.dishName}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.course}>Course: {course}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  dishItem: { 
    padding: 15, 
    marginBottom: 10, 
    backgroundColor: '#444', 
    borderRadius: 10, 
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  dishName: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  description: { fontSize: 16, color: 'gray' },
  course: { fontSize: 14, fontStyle: 'italic', color: '#FFD700' },
});
