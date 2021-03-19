import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '5%',
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
  }
});