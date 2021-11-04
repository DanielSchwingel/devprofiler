import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
   },
   title: {
      fontFamily: 'Rajdhani-Bold',
      fontSize: 40,
      lineHeight: 40,
      color: theme.colors.text,
      textAlign: 'center'
   },
   description: {
      fontFamily: 'Inter-Regular',
      fontSize: 15,
      lineHeight: 25,
      color: theme.colors.text,
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 15
   }
})

export { styles }