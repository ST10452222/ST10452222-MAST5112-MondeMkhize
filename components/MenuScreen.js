import React, { useState, useEffect,useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, RefreshControl ,Animated} from 'react-native';
import DishItem from './DishItem';
import { globalStyles } from '../styles/globalStyles';
import { useDishes } from '../context/DishContext';

export default function MenuScreen({ navigation }) {
  const { dishes } = useDishes();
  const [searchText, setSearchText] = useState('');
  const [filterCourse, setFilterCourse] = useState('');
  const [displayDishes, setDisplayDishes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fadeAnim = new Animated.Value(1.5);
  
    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 2.5,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, []);

  useEffect(() => {
    console.log('Updating...');
    const filtered = dishes.filter(dish => {
      const matchesSearchText = dish.name?.toLowerCase().includes(searchText.toLowerCase().trim());
      const matchesFilterCourse = filterCourse
        ? dish.course?.toLowerCase() === filterCourse.toLowerCase().trim()
        : true;

      return matchesSearchText && matchesFilterCourse;
    });

    setDisplayDishes(filtered.map(dish => ({ ...dish, id: dish.id.toString() })));
    console.log('Updated ', filtered);
  }, [dishes, searchText, filterCourse]);

  useEffect(() => {
    console.log("Dishes:", dishes);
  }, [dishes]);

  useEffect(() => {
    console.log("displayDishes:", displayDishes);
    console.log("Filter Course:", filterCourse);
  }, [displayDishes, filterCourse]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search dishes"
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("MenuFilter", { setFilterCourse })}
      >
        <Text style={globalStyles.buttonText}>Filter Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("MenuInput")}
      >
        <Text style={globalStyles.buttonText}>Add New Dish</Text>
      </TouchableOpacity>

      {displayDishes.length === 0 ? (
        <Text style={styles.noDishesText}>No dishes match your search or filter criteria.</Text>
      ) : (
        <FlatList
          data={displayDishes}
          // renderItem={({ item }) => <DishItem {...item} />}
          renderItem={({ item }) => (
            <Animated.View style={[styles.dishItem, { opacity: fadeAnim }]}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.course}>Course: {item.course}</Text>
            </Animated.View>
          )}       
          extraData={displayDishes}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          contentContainerStyle={{ flexGrow: 1 }} 
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#2C2C2C' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#FFD700', marginBottom: 20 },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#444',
  },
  noDishesText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },  
  dishItem: { 
    padding: 12,  
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
  description: { fontSize: 16, color: 'white' },
  course: { fontSize: 14, fontStyle: 'italic', color: '#FFD700' },
});