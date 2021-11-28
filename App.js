import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function App() {

  const [resul, setResul] = useState('0');
  const [operacion, setOperacion] = useState('');
  // const [prenum, setPrenum] = useState('');
  // const [accion, setAccion] = useState('');

  // const [operacion, setOperacion] = useState({
  //   num:['halo1','halo2'],
  // });


  const Total = (num) => {
    console.log(num);
  };

  return (
    <View style={styles.container}>

    
      <View style={styles.conte_resultado}>
        <Text style={styles.operacion}>
          {operacion}
        {/* {operacion+'= '+resul} */}
        {/* {console.log(accion)} */}
        {/* {resul} */}
        </Text>
        <Text style={styles.resultado}>
          {resul}
        </Text>
      </View>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity 
          onPress={() => {
            setOperacion('')
            setResul('0')
          }}
          style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>CLEAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{
          setResul(eval(operacion))
        }} 
        style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>=</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'1')}
          style={[styles.boton, styles.boton2]}>

          <Text style={styles.color}>1</Text>

        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'2')}
          style={[styles.boton, styles.boton2]}>

          <Text style={styles.color}>2</Text>

        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'3')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => setOperacion(operacion+'-')}
        style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>-</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'4')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'5')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'6')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'*')}
          style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>X</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'7')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'8')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'9')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'/')}
          style={[styles.boton, styles.boton1]}>
          <Text style={styles.color}>/</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.BtnConte}>
        
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'0')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'00')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'.')}
          style={[styles.boton, styles.boton2]}>
          <Text style={styles.color}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setOperacion(operacion+'+')}
          style={[styles.boton, styles.boton1]}>
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
  conte_resultado: {
    height: '30%',
    backgroundColor: '#333333',
    // flex: 1,
    

    // color: '#fff', //#696969
    // textAlignVertical: 'bottom',
    // textAlign: 'right',
    // fontSize: 50,


    // TextAlignVertical: 'text-bottom',
    // flex: 1,
    // justifyContent:'center',
    // alignItems: 'center',
    // fontSize: '60px'
  },
  operacion: {
    textAlignVertical: 'bottom',
    textAlign: 'right',
    // backgroundColor: 'blue',
    height: '65%',
    // height: '30%',
    color: '#AFAFAF',
    fontSize: 30,
  },
  resultado: {
    textAlignVertical: 'bottom',
    textAlign: 'right',
    // backgroundColor: 'red',
    color: '#FFFFFF',
    fontSize: 55,
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