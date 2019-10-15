import { StyleSheet,Dimensions} from 'react-native';
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewMain:{
    flex:1,
    width: '100%',
    height: '100%',
    // alignItems:'center',
  },
  viewContent:{
    flex:40,
    flexDirection: 'row',
    justifyContent:'space-between',    
  },
  textContent: {
    // shadowColor:'white',
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight:15,
    paddingTop:10,
  },
  logoImg: {
    width:35,
    height:30,
    marginLeft:10,
    marginTop:3,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  viewBody:{
    flex:heightDevice-40,
  },
}); 
export default styles;