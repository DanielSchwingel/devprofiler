import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
   },
   info: {
      flex: 1,
      marginLeft: 20
   },
   user: {
      flexDirection: 'row',
   },
   greeting: {
      fontFamily: 'Rajdhani-Medium',
      fontSize: 24,
      color: theme.colors.text,
      marginRight: 6
   },
   username: {
      fontFamily: 'Rajdhani-Bold',
      fontSize: 24,
      color: theme.colors.text
   },
   message: {
      fontFamily: 'Inter-Regular',
      fontSize: 13,
      color: theme.colors.text
   },
   image: {
      width: 48,
      height: 48,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: theme.colors.border
   },
   button: {
      width: 48,
      height: 48,
      backgroundColor: theme.colors.red,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center'
   }
})

export { styles }