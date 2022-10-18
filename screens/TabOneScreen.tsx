import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Task from '../components/Task';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <Task  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 5,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInput : {
    height: 40,
    width: 250,
    marginTop: 20,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4c4c4d',
    borderRadius: 10,
    backgroundColor: '#4c4c4d'
    
  },
  text : {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  }
});
