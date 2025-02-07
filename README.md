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

}, \[\]);

return (

&lt;Animated.View style={\[styles.dishItem, { opacity: fadeAnim }\]}&gt;

&lt;Text style={styles.dishName}&gt;{name}&lt;/Text&gt;

&lt;Text style={styles.description}&gt;{description}&lt;/Text&gt;

&lt;Text style={styles.course}&gt;Course: {course}&lt;/Text&gt;

&lt;/Animated.View&gt;

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

###

The given code defines a React Native functional component named DishItem, which takes name, description, and course as props and displays them inside an animated View. The component applies a fade-in effect using the Animated API and styles the content with StyleSheet.

import React, { useState, useEffect, useRef } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Animated, SafeAreaView, StatusBar, Picker } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import \* as Haptics from 'expo-haptics';

import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen() {

const navigation = useNavigation();

const \[selectedCourse, setSelectedCourse\] = useState("Starter");

const fadeAnim = useRef(new Animated.Value(0)).current;

const slideAnim = useRef(new Animated.Value(50)).current;

useEffect(() => {

Animated.parallel(\[

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

\]).start();

}, \[\]);

const handlePress = () => {

Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

navigation.navigate("Menu");

};

return (

&lt;LinearGradient colors={\['#1a1a1a', '#2C2C2C'\]} style={styles.container}&gt;

&lt;SafeAreaView style={styles.safeArea}&gt;

&lt;StatusBar barStyle="light-content" /&gt;

&lt;Animated.Text style={\[styles.header, { opacity: fadeAnim, transform: \[{ translateY: slideAnim }\] }\]}&gt;

Welcome, Chef Christoffel

&lt;/Animated.Text&gt;

&lt;Animated.View style={\[styles.content, { opacity: fadeAnim, transform: \[{ translateY: slideAnim }\] }\]}&gt;

&lt;Text style={styles.label}&gt;Select Course:&lt;/Text&gt;

<Picker

selectedValue={selectedCourse}

onValueChange={(itemValue) => setSelectedCourse(itemValue)}

style={styles.picker}

dropdownIconColor="#FFD700"

\>

&lt;Picker.Item label="Starter - R45" value="Starter" /&gt;

&lt;Picker.Item label="Main - R85" value="Main" /&gt;

&lt;Picker.Item label="Dessert - R60" value="Dessert" /&gt;

&lt;/Picker&gt;

<TouchableOpacity

style={\[globalStyles.button, styles.button\]}

onPress={handlePress}

accessibilityLabel="Navigate to the menu screen"

\>

&lt;Text style={globalStyles.buttonText}&gt;View Menu&lt;/Text&gt;

&lt;/TouchableOpacity&gt;

&lt;/Animated.View&gt;

&lt;/SafeAreaView&gt;

&lt;/LinearGradient&gt;

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

This React Native component, HomeScreen, serves as the landing screen for a restaurant-related app. It provides a course selection feature using a dropdown (Picker), applies animated transitions for a smoother user experience, and includes haptic feedback when the user interacts with the "View Menu" button.

import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MenuFilterScreen({ navigation, route }) {

const { setFilterCourse } = route.params;

const handleFilter = (course) => {

setFilterCourse(course);

navigation.goBack();

};

return (

&lt;View style={styles.container}&gt;

&lt;Text style={styles.header}&gt;Filter by Course&lt;/Text&gt;

&lt;TouchableOpacity style={styles.filterButton} onPress={() =&gt; handleFilter('Starter')}>

&lt;Text style={styles.filterText}&gt;Starter&lt;/Text&gt;

&lt;/TouchableOpacity&gt;

&lt;TouchableOpacity style={styles.filterButton} onPress={() =&gt; handleFilter('Main')}>

&lt;Text style={styles.filterText}&gt;Main&lt;/Text&gt;

&lt;/TouchableOpacity&gt;

&lt;TouchableOpacity style={styles.filterButton} onPress={() =&gt; handleFilter('Dessert')}>

&lt;Text style={styles.filterText}&gt;Dessert&lt;/Text&gt;

&lt;/TouchableOpacity&gt;

&lt;TouchableOpacity style={styles.filterButton} onPress={() =&gt; handleFilter('')}>

&lt;Text style={styles.filterText}&gt;Clear Filter&lt;/Text&gt;

&lt;/TouchableOpacity&gt;

&lt;/View&gt;

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

This React Native code defines a functional component named MenuFilterScreen, which provides a user interface for filtering menu items based on course types (Starter, Main, Dessert). The filtering is applied by updating a state variable (setFilterCourse) passed via navigation parameters (route.params). Below is a breakdown of the code along with suggestions for refactoring by splitting concerns into multiple files and functions.

import React, { useState } from 'react';

import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useDishes } from '../context/DishContext';

import { globalStyles } from '../styles/globalStyles';

export default function MenuInputScreen({ navigation }) {

const { dishes, setDishes } = useDishes();

const \[name, setName\] = useState('');

const \[description, setDescription\] = useState('');

const \[course, setCourse\] = useState('');

const handleAddDish = () => {

if (name && description && course) {

const newDish = {

id: (dishes.length + 1).toString(),

name,

description,

course,

};

setDishes(prevDishes => \[...prevDishes, newDish\]);

Alert.alert('Success', 'Dish added to the menu');

navigation.navigate("Menu");

//todo : after this onclick, re-render the menu list with the newly created item

} else {

Alert.alert('Error', 'Please fill in all fields');

}

};

return (

&lt;View style={styles.container}&gt;

&lt;Text style={styles.header}&gt;Add a New Dish&lt;/Text&gt;

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

&lt;TouchableOpacity style={globalStyles.button} onPress={handleAddDish}&gt;

&lt;Text style={globalStyles.buttonText}&gt;Add Dish&lt;/Text&gt;

&lt;/TouchableOpacity&gt;

&lt;/View&gt;

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

This code defines a MenuInputScreen component in a React Native app, allowing users to add a new dish to a menu. It utilizes React's useState hook to manage local state variables for the dish's name, description, and course, which are tied to input fields (TextInput). The component also uses a custom hook, useDishes, to access and update the global dishes state, adding a new dish to the list when the user submits the form. The handleAddDish function checks if all required fields are filled and either adds the new dish to the list (via the setDishes function) and navigates back to the menu screen or shows an error alert if any field is empty. The UI consists of three text input fields for name, description, and course, styled using StyleSheet.create(), along with a button (TouchableOpacity) to trigger the dish addition. The button's onPress event invokes handleAddDish, which manages the logic of adding the dish. Additionally, the code incorporates a global styles file, globalStyles, to maintain consistent styling across the app. To improve the app’s maintainability and readability, the code could be refactored by separating concerns: extracting the input form into a reusable DishInputForm component, managing state with custom hooks for specific functionality, and organizing styles into smaller, component-specific files. This modular approach would enhance code readability, scalability, and ease of testing.

import React, { useState, useEffect,useRef } from 'react';

import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, RefreshControl ,Animated} from 'react-native';

import DishItem from './DishItem';

import { globalStyles } from '../styles/globalStyles';

import { useDishes } from '../context/DishContext';

export default function MenuScreen({ navigation }) {

const { dishes } = useDishes();

const \[searchText, setSearchText\] = useState('');

const \[filterCourse, setFilterCourse\] = useState('');

const \[displayDishes, setDisplayDishes\] = useState(\[\]);

const \[refreshing, setRefreshing\] = useState(false);

const fadeAnim = new Animated.Value(1.5);

React.useEffect(() => {

Animated.timing(fadeAnim, {

toValue: 2.5,

duration: 1000,

useNativeDriver: true,

}).start();

}, \[\]);

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

}, \[dishes, searchText, filterCourse\]);

useEffect(() => {

console.log("Dishes:", dishes);

}, \[dishes\]);

useEffect(() => {

console.log("displayDishes:", displayDishes);

console.log("Filter Course:", filterCourse);

}, \[displayDishes, filterCourse\]);

const onRefresh = () => {

setRefreshing(true);

setTimeout(() => {

setRefreshing(false);

}, 500);

};

return (

&lt;View style={styles.container}&gt;

&lt;Text style={styles.header}&gt;Menu&lt;/Text&gt;

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

\>

&lt;Text style={globalStyles.buttonText}&gt;Filter Menu&lt;/Text&gt;

&lt;/TouchableOpacity&gt;

<TouchableOpacity

style={globalStyles.button}

onPress={() => navigation.navigate("MenuInput")}

\>

&lt;Text style={globalStyles.buttonText}&gt;Add New Dish&lt;/Text&gt;

&lt;/TouchableOpacity&gt;

{displayDishes.length === 0 ? (

&lt;Text style={styles.noDishesText}&gt;No dishes match your search or filter criteria.&lt;/Text&gt;

) : (

<FlatList

data={displayDishes}

// renderItem={({ item }) => &lt;DishItem {...item} /&gt;}

renderItem={({ item }) => (

&lt;Animated.View style={\[styles.dishItem, { opacity: fadeAnim }\]}&gt;

&lt;Text style={styles.dishName}&gt;{item.name}&lt;/Text&gt;

&lt;Text style={styles.description}&gt;{item.description}&lt;/Text&gt;

&lt;Text style={styles.course}&gt;Course: {item.course}&lt;/Text&gt;

&lt;/Animated.View&gt;

)}

extraData={displayDishes}

keyExtractor={(item) => item.id.toString()}

refreshControl={&lt;RefreshControl refreshing={refreshing} onRefresh={onRefresh} /&gt;}

contentContainerStyle={{ flexGrow: 1 }}

style={{ flex: 1 }}

/>

)}

&lt;/View&gt;

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

The provided code is a React Native MenuScreen component that displays a list of dishes with features like searching, filtering, and refreshing. It utilizes React hooks such as useState, useEffect, and useRef to manage state for search text, filtering by course, and controlling animations. It uses Animated to create a fade-in effect for dish items and the FlatList to display the filtered dishes. The dishes are filtered by search text and course filter criteria, and the list updates dynamically. The onRefresh function handles the pull-to-refresh action, and conditional rendering is used to show either the filtered dishes or a message when no results match. The component is styled using StyleSheet.create for a consistent visual design. To improve maintainability and readability, the code can be refactored by moving the filtering logic into a custom hook, separating UI components like the search bar and dish list items into reusable files, and organizing navigation actions into their own functions or hooks. This refactoring would modularize the code, making it easier to scale and maintain as the app grows.

Link to youtube video:
https://youtu.be/DwcCJ8PIUN8 


