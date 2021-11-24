import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function App() {

  const [count, setCount] = useState('');

  const onPress = (num) => {
    alert(num);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.resultado}>
      {count}
      </Text>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>CLEAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>=</Text>
        </TouchableOpacity>
        

      </View>

      <View style={styles.BtnConte}>
        
        {/* <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="red"
        onPress={() => console.log('siiii')}
        style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>1</Text>
        </TouchableHighlight> */}
        <TouchableOpacity 
          onPress={() => setCount(1)} 
          style={[styles.boton, styles.boton2]}>

          <Text style={styles.color}>1</Text>

        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setCount(2)}
          style={[styles.boton, styles.boton2]}>

          <Text style={styles.color}>2</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>-</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>X</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>/</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>+</Text>
        </TouchableOpacity>
        
      </View>

      



{/*       
      
      <TouchableOpacity style={styles.boton}>
        <Text>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton}>
        <Text>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton}>
        <Text>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton}>
        <Text>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton}>
        <Text>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton}>
        <Text>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton}>
        <Text>0</Text>
      </TouchableOpacity> */}

      {/* {
        // console.log('sii')
        for (let i = 0; i < 10; i++) {

          <TouchableOpacity style={styles.boton}>
        <Text>0</Text>
        </TouchableOpacity>

          // const element = array[i];
          
        }
      } */}
      
      {/* <StatusBar style="auto" /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  resultado: {
    height: '30%',
    backgroundColor: '#333333',
    color: '#fff', //#696969
    textAlignVertical: 'bottom',
    textAlign: 'right',
    fontSize: 50,
    // TextAlignVertical: 'text-bottom',
    // flex: 1,
    // justifyContent:'center',
    // alignItems: 'center',
    // fontSize: '60px'
  },
  BtnConte: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#767676',
    flexDirection: 'row'


    // width: '50%',
    // height: 100
  },
  boton: {
    // backgroundColor: 'red',
    color: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: '100%',
    borderWidth: 4,
    borderColor: "#1a1a1a",
    // borderRadius: 6,
  },
  boton1: {
    backgroundColor: '#2e2e2e',
  },
  boton2: {
    backgroundColor: '#464646',
  },
  color: {
    color: '#fff'
  }
});











// export default function App() {
//   return (
//     <View style={styles.container}>

//       <Text style={styles.resultado}>hola</Text>
//       <TouchableOpacity style={styles.boton}>

//       </TouchableOpacity>
      
//       <StatusBar style="auto" />

//     </View>
//   );
// }