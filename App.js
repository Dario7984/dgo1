// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, Linking, TouchableOpacity } from 'react-native';


// import MenuItem from './src/screen/MenuItem';

export default class App extends React.Component {
  //funciones
  dgo = async () => {
    const instagramURL = 'https://dgo.policia.gob.ec:8080';
    return Linking.openURL(instagramURL);
  };

  siipne3w = async () => {
    const instagramURL = 'https://siipne.policia.gob.ec/indexSiipne.php';
    return Linking.openURL(instagramURL);
  };
  
  
  qrandroid = async () => {
    const instagramURL = 'https://play.google.com/store/apps/details?id=com.apple.qrcode.reader';
    return Linking.openURL(instagramURL);
  };
 

  qrios = async () => {
    const instagramURL = 'https://apps.apple.com/ec/app/lector-fácil-de-códigos-qr/id1193307241';
    return Linking.openURL(instagramURL);
  };



  render(){
    return(
    <ImageBackground source={require('./assets/dgoh.png')}
    style={styles.container}>
        <View style={styles.overlayContainer}>

        <View style={styles.top} >
        <Text style={styles.header}>DIRECCION GENERAL DE OPERACIONES</Text>
        </View>

          <View style={styles.menuContainer}>
            <View style={styles.menuItem} >
            <TouchableOpacity onPress={this.dgo}>
              <Image style={styles.image} source={require('./assets/dgo.png')}/>
              </TouchableOpacity>
              <Text style={styles.texticon}>         DGO</Text>
              </View>

              <View style={styles.menuItem}>
              <TouchableOpacity onPress={this.siipne3w}>
                <Image style={styles.image} source={require('./assets/sipne3w.png')}/>
                </TouchableOpacity>
                <Text style={styles.texticon}>     Siipne 3W</Text>
                </View>

                <View style={styles.menuItem}>
                  <TouchableOpacity style={{height: '100%'}} onPress={this.qrandroid}>
                  <Image style={styles.image} source={require('./assets/qrandroid.png')}/>
                  <Text style={styles.texticon}>   QR Android</Text>
                  </TouchableOpacity>
                  </View>

                  <View style={styles.menuItem}>
                  <TouchableOpacity style={{height: '100%'}} onPress={this.qrios}>
                  <Image style={styles.image} source={require('./assets/qrios.png')}/>
                  <Text style={styles.texticon}>     QR IOS</Text>
                  </TouchableOpacity>
                  </View>

          </View>
          <View style={styles.footer} >
        <Text style={styles.footertext}>POLICIA NACIONAL DEL ECUADOR</Text>
        <Text style={styles.footertext}>DIRECCION GENERAL DE OPERACIONES</Text>
        </View>
                  </View>
                  </ImageBackground>
                  );
                }
              }
              



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)'
  },
  top: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  header: {
    color: '#000000',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    // borderColor: '#fff',
    // borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    // backgroundColor: 'rgba(110,113,138, .5)'
  },

  menuContainer:{
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

//=======================
menuItem: {
  width: '33.333333%',
  height: '50%',
  padding: 20,
  //CUADRO
  // backgroundColor: '#FCCB00',
  // borderColor: '#fff',
  // borderWidth: 2,
},

image:{
  width: '100%',
  height: '100%',
  opacity: 0.8,
  borderColor: '#fff',
  borderWidth: 3,
  borderRadius: 400/2
},


texticon: {
  color: '#000',
  fontWeight: 'bold',
  fontSize: 15,
  // paddingHorizontal: 24,
  // paddingVertical: 16,
  // backgroundColor: '#e6005c',
  borderRadius: 12,
  // overflow: 'hidden',
},

footertext: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
  paddingHorizontal: 24,
  textAlign: 'center',
  // paddingVertical: 16,
  // backgroundColor: '#e6005c',
  borderRadius: 12,
  // overflow: 'hidden',
},

  
});