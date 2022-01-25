import React, { useState } from 'react';
import {StyleSheet,View,Text,Button,Alert} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount +1 )
  };
  
  const handleDecrement = () => {
    setCount(prevCount => prevCount -1 )
  };

  return (
    <>  
    <View style={styles.countButton}>
    <Button title= 'Previous' onPress={handleDecrement}></Button>
    <Text style={styles.text}>Analysis Pending : {count} </Text>
    <Button title= 'next' onPress={handleIncrement}></Button>
    </View>

    <View style={styles.doneButton}>
    
    <Button title= 'Done' onPress={() => Alert.alert("Stay Healthy,Take care😊") }></Button>
    
    </View>
    </>
  );
};


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'skyblue',
    },

    text:{
        color:'#E0115F',
        fontSize:24,
        fontStyle:'normal',
        textAlign :'center',
        marginLeft : 10,
    },
    countButton:{
        borderRadius:20,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    doneButton:{
        flexDirection: 'row',
        justifyContent:"space-evenly",
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 20,
    },
});

export default Counter;
