import { StyleSheet,Dimensions} from 'react-native';
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewList: {
    // marginBottom:10,
  },
  viewTitleList:{
    flexDirection: 'row',
    backgroundColor:'firebrick',
    justifyContent:'space-between',    
  },
  txtTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom:5,
    paddingTop:5,
    color:'white',
  },
  txtMore:{
    fontSize: 13,
    fontStyle: 'italic',
    paddingBottom:5,
    paddingTop:5,
    paddingRight:5,
    color:'white',
  }
}); 
export default styles;