import { StyleSheet } from 'react-native';
const ASPECT_RATIO = 16 / 9;

export default StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 10,
    color: '#888',
    fontSize: 18,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    backgroundColor: 'grey',
    aspectRatio: ASPECT_RATIO,
  },
  videoPoster: {
    top: 0,
    width: '100%',
    minWidth: '100%',
    height: 'auto',
    aspectRatio: ASPECT_RATIO,
    position: 'absolute',
    backgroundColor: '#fff',
  },
});
