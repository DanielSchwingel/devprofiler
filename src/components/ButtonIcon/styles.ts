import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: 56,
      flexDirection: 'row',
      backgroundColor: theme.colors.red,
      borderRadius: 8,
   },
   iconWrapper: {
      borderRightWidth: 1,
      borderRightColor: theme.colors.background,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center'
   },
   description: {
      fontFamily: 'Inter-Medium',
      fontSize: 15,
      flex: 1,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: theme.colors.background
   }
})

export { styles } 