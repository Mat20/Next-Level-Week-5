import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/matheus.jpeg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
  return (
    <View style={styles.container}>
       <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>Matheus</Text>
       </View>

       <Image source={userImg} style={styles.image} />  

    </View>
  )
}


const styles = StyleSheet.create({
   container: {
     width: '100%',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingVertical: 20,
     marginTop: getStatusBarHeight(),
   },
   greeting: {
      fontSize: 32,
      color: colors.heading,
      fontFamily: fonts.text 
   },
   userName: {
     fontSize: 32,
     fontFamily: fonts.text
   },
   image: {
     width: 80,
     height: 80,
     borderRadius: 40
   },
});