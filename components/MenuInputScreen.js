import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDishes } from '../context/DishContext';
import { globalStyles } from '../styles/globalStyles';

export default function MenuInputScreen({ navigation }) {
  const { dishes, setDishes } = useDishes();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');

  const handleAddDish = () => {
    if (name && description && course) {
      const newDish = {
        id: (dishes.length + 1).toString(),
        name,
        description,
        course,
      };
      setDishes(prevDishes => [...prevDishes, newDish]); 
      Alert.alert('Success', 'Dish added to the menu');
      navigation.navigate("Menu"); 
      //todo : after this onclick, re-render the menu list with the newly created item
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Dish</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        placeholderTextColor="#aaa"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (e.g., Starter, Main, Dessert)"
        placeholderTextColor="#aaa"
        value={course}
        onChangeText={setCourse}
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleAddDish}>
        <Text style={globalStyles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#2C2C2C' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#FFD700', marginBottom: 20 },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#444',
  },
});
