
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:'#fff9fc',
      borderRadius:20,
    justifyContent: 'space-between',
      paddingTop:30,
      paddingBottom:30,
      paddingLeft:30,
      paddingRight:30,


  },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        color:'#000000',
        fontSize:40
    },
    textInputWrapper1: {
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default styles;
