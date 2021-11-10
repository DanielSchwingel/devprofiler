import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import { styles } from './style'
import logout from '../../assets/images/logout.png'

function Avatar() {
   return (
      <View style={styles.container}>
         <Image 
            source={{ uri: 'https://scontent.fxap4-1.fna.fbcdn.net/v/t39.30808-6/241684747_2281840765279834_44228916609511968_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEjmumWdrLu--CnaAITjFo_4dzBMFV_PZDh3MEwVX89kCBL43KNijImRi1Dh5vsM7PrCavYAqIZjjeTfaFrPDw5&_nc_ohc=4KuUJ29D178AX8Htvit&_nc_ht=scontent.fxap4-1.fna&oh=3fbffebb1100c71cc0603ded504b9991&oe=6191F486' }}
            style={styles.image}
         />
         <View style={styles.info}>
            <View style={styles.user}>
               <Text style={styles.greeting}>
                  Olá, 
               </Text>
               <Text style={styles.username}>
                  DanielSchwingel
               </Text>
            </View>
            <Text style={styles.message}>
               Bora codar
            </Text>
         </View>
         <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
         >
            <Image source={logout}/>
         </TouchableOpacity>
      </View>
   )
}

export { Avatar }