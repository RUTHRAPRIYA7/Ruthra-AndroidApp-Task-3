import React, { useState } from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default function BottomView() {
    return (
        <>
            
        <View style={styles.box}>
                <Text style={[styles.nameText,{color:'#003153',fontWeight:'600'}]}>MY ANALYSIS</Text>
        </View>
        </>
);};

const styles= StyleSheet.create({  
    box: {
        width: 170,
        height: 75,
        backgroundColor:"#708090",
        marginLeft:120,
        marginTop: 30,
        borderRadius:20,
        justifyContent: "center"
    },
    nameText: {
        fontWeight:'400',
        fontSize:22,
        paddingLeft : 4,
        color: '#003153',
        marginLeft:10,
    },
    Text:{
        marginTop:10,
        marginLeft:22,
        fontSize:19,
        color:'#FF0000',
    },
})
       
    