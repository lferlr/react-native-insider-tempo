import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '1%',
    marginTop: '5%',
    backgroundColor: '#E8F0FF'
  },

  backButton: {
    flexDirection: 'row',
    marginLeft: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  },

  searchBox: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDD',
    width: '90%',
    height: 50,
    borderRadius: 8
  },

  input: {
    width:'85%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 7
  },

  icon: {
    width: '15%',
    backgroundColor: '#1ED6FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }, 

  header: {
    marginTop: '5%',
    width: '90%',
    paddingTop: '5%',
    paddingBottom: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8
  }, 

  date: {
    color: '#FFF',
    fontSize: 16
  },

  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },

  temp: {
    color: '#FFF',
    fontSize: 80,
    fontWeight: 'bold'
  }
});