import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from '../../components/Avatar'

import { styles } from './styles'

function Home() {
   return (
      <View style={styles.container}>
         <Avatar/>
      </View>
   )
}

export { Home }