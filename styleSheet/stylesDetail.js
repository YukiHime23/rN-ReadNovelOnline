import { StyleSheet,Dimensions} from 'react-native';
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainDetail:{
    flex:1,
    borderBottomWidth:2,
    borderBottomColor:'crimson',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgNovel: {
    width:160,
    height:220,
    margin:10,
  },
  info:{
    flex:1,
    flexDirection: 'column',
    margin:10,
  },
  txtTitle:{
    fontSize: 17,
    fontWeight: 'bold',
  },
  txtTitleSmall:{
    fontSize: 15,
  },
  txtInfoChild:{
    fontSize: 14,
    fontStyle:'italic',
    marginTop:5,
  },
  listVolume:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  txtChapChild:{
    margin:10,
    width: widthDevice/2,
  }
}); 
export default styles;