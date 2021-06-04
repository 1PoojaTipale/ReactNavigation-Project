// Flex box deep drive...coding
// import React from 'react';
// import { Text, View } from 'react-native';

import { ScrollView } from "react-native";

// export default function App() {
//   return (
//     <View style={{padding:50 , flexDirection:'row',width:'80%',height:300,justifyContent:'space-around',alignItem:'stretch'}}>
//        <View  style={{
//          backgroundColor:'red', 
//          flex:3,
//          justifyContent:'center',
//          alignItem:'center'
//        }}
//        >
//        <Text> 1 </Text>
// </View>

// <View style= {{
//   backgroundColor:'green', 
//   flex:3,
//  justifyContent:'center',
//   alignItem:'center'
// }} 
// >
// <Text>2</Text>
// </View>


// <View style= {{

//   backgroundColor:'pink', 
//   flex:3,
//  justifyContent:'center',
//  alignItem:'center'
// }} 
// >
//   <Text>3</Text>
// </View>
// </View>

//   );
   
    
// }

/////26/////

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Text, View,StyleSheet,TextInput,Button } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.screen}>
//        <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input}
//     />
// <Button title="ADD"/>
// </View>
//  </View>
// );
//   }
   
// const styles= StyleSheet.create({
//   screen :{
//     padding:50
//   },
//    inputContainer:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center'
//    },
//    input:{
//     width: '80%',
//     borderColor:'green', 
//     borderWidth: 1,
//     padding: 10
//    }
// }
// );


 /////27////
 // import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { Text, View,StyleSheet,TextInput,Button } from 'react-native';

// export default function App()
//  {
//   const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
  
//   const goalInputHandler = (enteredText) =>
//   {
//     setEnteredGoal(enteredText); 
//   };
//   const addGoalHandler = () =>
//   {
// setCourseGoals(currentGoals =>[...currentGoals,enteredGoal]);
//   };

//   return (
//     <View style={styles.screen}>
//        <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input} 
//     onChangeText= {goalInputHandler}
//     value= {enteredGoal}
//     />
// <Button title="ADD" onPress={addGoalHandler}/>
// </View>
// <View>
//   {courseGoals.map((goal)=> <Text>{goal}</Text>)}
//   </View>
//   </View>
// );
//   };
   
// const styles= StyleSheet.create({
//   screen :{
//     padding:50
//   },
//    inputContainer:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center'
//    },
//    input:{
//     width: '80%',
//     borderColor:'green', 
//     borderWidth: 1,
//     padding: 10
//    }
// }
// );


// ***30-ScrollView//

// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { Text, View,StyleSheet,TextInput,Button, ScrollView } from 'react-native';

// export default function App()
//  {
//   const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
  
//   const goalInputHandler = (enteredText) =>
//   {
//     setEnteredGoal(enteredText); 
//   };
//   const addGoalHandler = () =>
//   {
// setCourseGoals(currentGoals =>[...currentGoals,enteredGoal]);
//   };

//   return (
//     <View style={styles.screen}>
//        <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input} 
//     onChangeText= {goalInputHandler}
//     value= {enteredGoal}
//     />
// <Button title="ADD" onPress={addGoalHandler}/>
// </View>
// < ScrollView>
//   {courseGoals.map((goal)=> 
//   <View  key={goal} style={styles.listItem}>
//     <Text >{goal}</Text>
//     </View>)}
//   </ ScrollView>
//   </View>
// );
//   };
   
// const styles= StyleSheet.create({
//   screen :{
//     padding:50
//   },
//    inputContainer:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center'
//    },
//    input:{
//     width: '80%',
//     borderColor:'green', 
//     borderWidth: 1,
//     padding: 10
//    },
//    listItem : {
//      padding:10,
//      borderColor:'green',
//      borderWidth: 1,
//      backgroundColor:'skyblue',
//      marginVertical:10
//    }
// }
// );

/*****31 Flastlist,keyextractor */

// import React, { useState } from 'react';
// import { Text, View,StyleSheet,TextInput,Button, ScrollView, FlatList } from 'react-native';

// export default function App()
//  {
//   const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
  
//   const goalInputHandler = (enteredText) =>
//   {
//     setEnteredGoal(enteredText); 
//   };
//   const addGoalHandler = () =>
//   {
// setCourseGoals(currentGoals =>[...currentGoals,{id :Math.random().toString() ,value:enteredGoal}]);
//   };

//   return (
//     <View style={styles.screen}>
//        <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input} 
//     onChangeText= {goalInputHandler}
//     value= {enteredGoal}
//     />
// <Button title="ADD" onPress={addGoalHandler}/>
// </View>
// < FlatList
// keyExtractor={(item,index) => item.id}
//  data={courseGoals}
//     renderItem={itemData =>(
//   <View  style={styles.listItem}>
//     <Text >{itemData.item.value}</Text>
//     </View>
//     )}
//     />
//   </View>
// );
//   };
   
// const styles= StyleSheet.create({
//   screen :{
//     padding:50
//   },
//    inputContainer:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center'
//    },
//    input:{
//     width: '80%',
//     borderColor:'green', 
//     borderWidth: 1,
//     padding: 10
//    },
//    listItem : {
//      padding:10,
//      borderColor:'green',
//      borderWidth: 1,
//      backgroundColor:'skyblue',
//      marginVertical:10
//    }
// }
// );


/***32-splitting ****/

// import React from 'react'
// import {View,Text,StyleSheet} from 'react-native'
// const GoalItem = props => {
//     return(
//     <View  style={styles.listItem}>
//     <Text >{props.title}</Text>
//     </View>
//     );
// };
// const styles =StyleSheet.create({
//     listItem : {
//         padding:10,
//         borderColor:'green',
//         borderWidth: 1,
//         backgroundColor:'skyblue',
//         marginVertical:10
//       }
// });
// export default GoalItem

// //app.js////

// // import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import GoalItem from './components/GoalItem';
// import { Text, View,StyleSheet,TextInput,Button, ScrollView, FlatList } from 'react-native';

// export default function App()
//  {
//   const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
  
//   const goalInputHandler = (enteredText) =>
//   {
//     setEnteredGoal(enteredText); 
//   };
//   const addGoalHandler = () =>
//   {
// setCourseGoals(currentGoals =>[...currentGoals,{id :Math.random().toString() ,
//   value:enteredGoal}]);
//   };

//   return (
//     <View style={styles.screen}>
//        <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input} 
//     onChangeText= {goalInputHandler}
//     value= {enteredGoal}
//     />
// <Button title="ADD" onPress={addGoalHandler}/>
// </View>
// < FlatList
// keyExtractor={(item,index) => item.id}
//  data={courseGoals}
//     renderItem={itemData => <GoalItem title={itemData.item.value}/>}
//     />
//   </View>
// );
//   };
   
// const styles= StyleSheet.create({
//   screen :{
//     padding:50
//   },
//    inputContainer:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center'
//    },
//    input:{
//     width: '80%',
//     borderColor:'green', 
//     borderWidth: 1,
//     padding: 10
//    },
   
// }
// );

/*** 33****/

// import React, {useState} from 'react';
// import {View,TextInput,StyleSheet,Button} from 'react-native'

// const GoalInput = props => {

//     const [enteredGoal, setEnteredGoal] = useState('');

//     const goalInputHandler = (enteredText) =>
//     {
//       setEnteredGoal(enteredText); 
//     };
//     return(
//         <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input} 
//     onChangeText= {goalInputHandler}
//     value= {enteredGoal}
//     />
//  < Button title="ADD" onPress= {props.onAddGoal.bind(this,enteredGoal)}/>
// </View>
//     );
// };

// const styles =StyleSheet.create({

//     inputContainer:{
//         flexDirection:'row',
//         justifyContent:'space-between',
//         alignItems:'center'
//        },
//        input:{
//         width: '80%',
//         borderColor:'green', 
//         borderWidth: 1,
//         padding: 10
//        }, 
// });

// export default GoalInput;

/*34 Touchable */

// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';
// import { Text, View,StyleSheet,TextInput,Button, ScrollView, FlatList } from 'react-native';

// export default function App()
//  {
//   // const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
  
 
//   const addGoalHandler = goalTitle =>
//   {
// setCourseGoals(currentGoals =>[...currentGoals,{id :Math.random().toString() ,
//   value: goalTitle}]);
//   };

//   return (
//     <View style={styles.screen}>
//        <GoalInput onAddGoal ={addGoalHandler}/>
// < FlatList
// keyExtractor={(item,index) => item.id}
//  data={courseGoals}
//     renderItem={itemData => <GoalItem onDelete={()=> console.log('Does that work?')} title={itemData.item.value}/>}
//     />
     
//   </View>
// );
//   };
   
// const styles= StyleSheet.create({
//   screen :{
//     padding:50
//   },
   
   
// }
// );

// import React from 'react'
// import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
// const GoalItem = props => {
//     return(
//         <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
//     <View  style={styles.listItem}>
//     <Text >{props.title}</Text>
//     </View>
//     </TouchableOpacity>
//     );
// };
// const styles =StyleSheet.create({
//     listItem : {
//         padding:10,
//         borderColor:'green',
//         borderWidth: 1,
//         backgroundColor:'skyblue',
//         marginVertical:10
//       }
// });
// export default GoalItem

//35 Deleteing item////
// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';
// import { Text, View,StyleSheet,TextInput,Button, ScrollView, FlatList } from 'react-native';

// export default function App()
//  {
//   // const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
  
 
//   const addGoalHandler = goalTitle =>
//   {
// setCourseGoals(currentGoals =>[...currentGoals,{id :Math.random().toString() ,
//   value: goalTitle}]);
//   };

//   const removeGoalHandler = goalId =>{
//     setCourseGoals(currentGoals=>{
//       return currentGoals.filter((goal)=>goal.id!==goalId);
//     });
//   }




//   return (
//     <View style={styles.screen}>
//        <GoalInput onAddGoal ={addGoalHandler}/>
// < FlatList
// keyExtractor={(item,index) => item.id}
//  data={courseGoals}
//     renderItem={itemData => (
//     <GoalItem
//      id= {itemData.item.id}
//       onDelete= {removeGoalHandler}
//      title={itemData.item.value}/>)
//     }
//     />
     
//   </View>
// );
//   };
   
// const styles= StyleSheet.create({
//   screen :{
//     padding:50
//   },
   
   
// }
// );

// import React from 'react'
// import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
// const GoalItem = props => {
//     return(
//         <TouchableOpacity  onPress={props.onDelete.bind(this,props.id)}>
//     <View  style={styles.listItem}>
//     <Text >{props.title}</Text>
//     </View>
//     </TouchableOpacity>
//     );
// };
// const styles =StyleSheet.create({
//     listItem : {
//         padding:10,
//         borderColor:'green',
//         borderWidth: 1,
//         backgroundColor:'skyblue',
//         marginVertical:10
//       }
// });
// export default GoalItem

////36////
// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';
// import { View,StyleSheet,Button, FlatList } from 'react-native';

// export default function App()
//  {
//   // const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
//   const [isAddMode, setIsAddMode] = useState(false);
  
 
//   const addGoalHandler = goalTitle =>
//   {
// setCourseGoals(currentGoals =>[...currentGoals,{id :Math.random().toString() ,
//   value: goalTitle}]);
//   };

//   const removeGoalHandler = goalId =>{
//     setCourseGoals(currentGoals=>{
//       return currentGoals.filter((goal)=>goal.id!==goalId);
//     });
//   }




//   return (
//     <View style={styles.screen}>
//       <Button title="Add New Goal"onPress={()=>setIsAddMode(true)}/>
//        <GoalInput visible={isAddMode} onAddGoal ={addGoalHandler}/>
// < FlatList
// keyExtractor={(item,index) => item.id}
//  data={courseGoals}
//     renderItem={itemData => (
//     <GoalItem
//      id= {itemData.item.id}
//       onDelete= {removeGoalHandler}
//      title={itemData.item.value}/>)
//     }
//     />
     
//   </View>
// );
//   };
   
// const styles= StyleSheet.create({
//   screen :{
//     padding:50
//   },
   
   
// }
// );
// import React, {useState} from 'react';
// import {View,TextInput,StyleSheet,Button,Modal} from 'react-native'

// const GoalInput = props => {

//     const [enteredGoal, setEnteredGoal] = useState('');

//     const goalInputHandler = (enteredText) =>
//     {
//       setEnteredGoal(enteredText); 
//     };
//     return(
//         <Modal visible={props.visible}animationType="Slide">
//         <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input} 
//     onChangeText= {goalInputHandler}
//     value= {enteredGoal}
//     />
//  < Button title="ADD" onPress= {props.onAddGoal.bind(this,enteredGoal)}/>
// </View>
// </Modal>
//     );
// };

// const styles =StyleSheet.create({

//     inputContainer:{
//         flexDirection:'row',
//         justifyContent:'space-between',
//         alignItems:'center'
//        },
//        input:{
//         width: '80%',
//         borderColor:'green', 
//         borderWidth: 1,
//         padding: 10
//        }, 
// });

// export default GoalInput;

////37//
// app.js file is same as above
// import React, {useState} from 'react';
// import {View,TextInput,StyleSheet,Button,Modal} from 'react-native'

// const GoalInput = props => {

//     const [enteredGoal, setEnteredGoal] = useState('');

//     const goalInputHandler = (enteredText) =>
//     {
//       setEnteredGoal(enteredText); 
//     };
//     return(
//         <Modal visible={props.visible}animationType="Slide">
//         <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input} 
//     onChangeText= {goalInputHandler}
//     value= {enteredGoal}
//     />
//  < Button title="ADD" onPress= {props.onAddGoal.bind(this,enteredGoal)}/>
// </View>
// </Modal>
//     );
// };

// const styles =StyleSheet.create({

//     inputContainer:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//        },
//        input:{
//         width: '80%',
//         borderColor:'green', 
//         borderWidth: 1,
//         padding: 10,
//         marginBottom: 10
//        }, 
// });

// export default GoalInput;


///38,39//
// import React, {useState} from 'react';
// import {View,TextInput,StyleSheet,Button,Modal} from 'react-native'

// const GoalInput = props => {

//     const [enteredGoal, setEnteredGoal] = useState('');

//     const goalInputHandler = (enteredText) =>
//     {
//       setEnteredGoal(enteredText); 
//     };

//     const addGoalHandler = () =>
//     {
//      props.onAddGoal(enteredGoal);
//      setEnteredGoal('')
//     }
     
    

//     return(
//         <Modal visible={props.visible}animationType="Slide">
//         <View style={styles.inputContainer}>

//     <TextInput 
//     placeholder="Course Goal"
//     style= {styles.input} 
//     onChangeText= {goalInputHandler}
//     value= {enteredGoal}
//     />

//     <View style={styles.buttonContainer}>
//         <View style={styles.button}>
//  < Button title="CANCEL"  color="red" onPress={props.onCancel}/>
//  </View>
// <View style={styles.button}> 
// < Button title="ADD" onPress= {addGoalHandler}/>
// </View>
//  </View>
// </View>

// </Modal>
//     );
// };

// const styles =StyleSheet.create({

//     inputContainer:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//        },
//        input:{
//         width: '80%',
//         borderColor:'green', 
//         borderWidth: 1,
//         padding: 10,
//         marginBottom: 10
//        }, 
//        buttonContainer:{
//            flexDirection:'row',
//            justifyContent:'space-around',
//            width:'60%'
//        },
//        button:
//        {
//            width:'40%',
//        }
// });

// export default GoalInput;








	
	
	
