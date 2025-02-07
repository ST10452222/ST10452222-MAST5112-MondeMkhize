import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MenuFilterScreen({ navigation, route }) {
  const { setFilterCourse } = route.params;

  const handleFilter = (course) => {
    setFilterCourse(course);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course</Text>

      <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Starter')}>
        <Text style={styles.filterText}>Starter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Main')}>
        <Text style={styles.filterText}>Main</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Dessert')}>
        <Text style={styles.filterText}>Dessert</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('')}>
        <Text style={styles.filterText}>Clear Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#2C2C2C' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#FFD700', marginBottom: 20 },
  filterButton: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#444',
    borderRadius: 8,
    alignItems: 'center',
  },
  filterText: { fontSize: 18, color: '#FFD700' },
});
