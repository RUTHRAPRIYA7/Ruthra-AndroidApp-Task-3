import React from 'react';
import { StyleSheet,View,Text,ScrollView,TouchableOpacity} from 'react-native';

export default function TopView() {
    return (

        <View style={styles.mid}>

        <View style={styles.top}>
          <Text style={[styles.nameText,{marginLeft:140,color:'#FFFFF0'}]}>FiT and FaB</Text>
        </View>
             
        <View style={{flexDirection:'column',height:92,position:'absolute',alignItems: "center",marginLeft:94,fontWeight:"bold"}}><Text style={styles.ProgressText}> TODAY'S STATUS </Text></View>

  
          <View style={styles.box}>
              <Text style={styles.progresBox}>WATER🥛{"\n"}
                <Text style={{fontSize:20,color:'#000000'}}>Drink 3L of water</Text>
              </Text>
             
          <View style={styles.rightbox}>
              <Text style={styles.progresBox}>FOOD🍔{"\n"}
                <Text style={{fontSize:20,color:'#000000'}}>Daily intake 2000 calories</Text>
              </Text>
          </View>
          </View>

          <View style={styles.box}>
              <Text style={styles.progresBox}>RUN🏃‍♀️{"\n"}
                <Text style={{fontSize:20,color:'#000000'}}>Ran for 3hrs</Text>
              </Text>
             
          <View style={styles.rightbox}>
              <Text style={styles.progresBox}>SLEEP🛌{"\n"}
                <Text style={{fontSize:20,color:'#000000'}}>Deepsleep for 7 hrs</Text>
              </Text>
          </View>
          </View>

          <View style={styles.box}>
              <Text style={styles.progresBox}>MIND🧠{"\n"}
                <Text style={{fontSize:20,color:'#000000'}}>Seems to be Happy</Text>
              </Text>
             
          <View style={styles.rightbox}>
              <Text style={styles.progresBox}>WORK📠{"\n"}
                <Text style={{fontSize:20,color:'#000000'}}>Well done</Text>
              </Text>
          </View>
          </View>
   
   
   
    


          </View>
      );
  };
  
  const styles = StyleSheet.create({
      container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'skyblue',
      },
      top: {
        backgroundColor:'#FD6C9E',
        borderRadius :60,
        height:40,
        width: 400,      
        position: 'absolute',
        flexDirection:'column'
        },
      mid: {
        backgroundColor:'skyblue' ,
        height:600,
        flexDirection:'column',
      },
      nameText: {
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:24,
        position : 'absolute',
        alignItems: "center",
        justifyContent: "center",
        color: '#FFFFF0',
      },
      ProgressText:{
        marginTop:59,
        paddingLeft:4,
        fontSize:22,
        color:'#000000',
    },
      text:{
        color:'#000000',
        fontSize:24,
        fontStyle:'italic',
        marginHorizontal:20,
        marginTop:8,
      },
    
      progresBox:{
        color:'#FFFFF0',
         marginLeft:20,
         marginTop:9,
         fontSize:22,
         fontWeight:"bold",
      },
      box: {
        width: 160,
        height: 90,
        backgroundColor:"#E0B0FF",
        marginLeft:18,
        marginTop: 100,
        borderRadius:10,
        flexDirection: 'row',
      },
      rightbox: {
        width: 160,
        height: 90,
        backgroundColor:"#E0B0FF",
        marginLeft:60,
        marginTop: 2,
        borderRadius:10,
        flexDirection:'row',
      }
    });
    