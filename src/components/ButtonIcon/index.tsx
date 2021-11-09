import React from 'react'
import { TouchableOpacity, View, Text, Image, TouchableOpacityProps, ImageSourcePropType } from 'react-native'

import { styles } from './styles'

interface IButtonIconProps extends TouchableOpacityProps {
   icon: ImageSourcePropType,
   description: string
} 

function ButtonIcon({ icon, description, ...rest }: IButtonIconProps) {
   return (
      <TouchableOpacity 
         style={styles.container}
         activeOpacity={0.7}
         {...rest}
      >
         <View style={styles.iconWrapper}>
            <Image source={icon}/>
         </View>
         <Text style={styles.description}>
            {description}
         </Text>
      </TouchableOpacity>
   )
}

export { ButtonIcon } 