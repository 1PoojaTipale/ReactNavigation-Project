import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
const GoalItem = props => {
    return(
        <TouchableOpacity  onPress={props.onDelete.bind(this,props.id)}>
    <View  style={styles.listItem}>
    <Text >{props.title}</Text>
    </View>
    </TouchableOpacity>
    );
};
const styles =StyleSheet.create({
    listItem : {
        padding:10,
        borderColor:'green',
        borderWidth: 1,
        backgroundColor:'skyblue',
        marginVertical:10
      }
});
export default GoalItem