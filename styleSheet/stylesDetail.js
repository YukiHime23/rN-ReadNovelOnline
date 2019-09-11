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
  viewBody:{
    flex:heightDevice-40,
  },
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