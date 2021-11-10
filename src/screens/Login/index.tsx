import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ButtonIcon } from '../../components/ButtonIcon'
import { IRoutesList } from '../../../routes'

import { styles } from './styles'
import login from '../../assets/images/login.png'
import github from '../../assets/images/github.png'

type LoginRouteProp = StackNavigationProp<IRoutesList, 'login'>;

function Login() {
   
   const navigation = useNavigation<LoginRouteProp>()

   function handleSigIn(){
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