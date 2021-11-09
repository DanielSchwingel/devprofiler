import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ButtonIcon'

import { styles } from './styles'
import login from '../../assets/images/login.png'
import github from '../../assets/images/github.png'


function Login() {
   const navigation = useNavigation()

   function handleSigIn(){
      console.log('teste')
      navigation.navigate('home')
   }

   return (
      <View style={styles.container}>
         <Image source={login}/>
         <Text style={styles.title}>
            Seu scout pessoal {`\n`}
            no mundo da {`\n`}
            programação
         </Text>
         <Text style={styles.description}>
            Compartilhe seu DevCard e apareça no {`\n`}
            mercado para novos recrutadores e {`\n`}
            alavanque sua carreira
         </Text>
         <ButtonIcon
            icon={github}
            description='Entrar com GitHub'
            onPress={handleSigIn}
         />
      </View>
   )
}

export { Login }