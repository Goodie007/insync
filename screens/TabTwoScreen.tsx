import { useNavigation,  } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

interface TabProps {
  title: string;
  userId: any;
  id?: any;
  completed: boolean;
  route:any
}

export default function TabTwoScreen({title, userId, completed, route}: TabProps) {
  const baseUrl = "https://jsonplaceholder.typicode.com/todos/"

  const [edit, setEdit] = useState()
  const navigation = useNavigation()

  const { data } = route.params;

  const editTask = async () => {
    axios
    .put(`${baseUrl}/${data}`, {
        title: "title",
        userId: "#9996",
        completed: false
    })
    .then((response) => {
        console.log(response.data)
        setEdit(response.data)
    })

    console.log(data)
}
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two</Text> */}
      <TextInput
        placeholder={"Edit your todo"}
        style={styles.textInput}
        onChange={({ nativeEvent: { eventCount, target, text } }) => {
          setEdit(text);
          console.log(text);
      } }
      />
      <Button 
        title='edit'
        color={"#841584"}
        onPress={() => {
          editTask()
          navigation.navigate("TabOne")
          
        }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 200,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4c4c4d',
    borderRadius: 10,
    backgroundColor: '#4c4c4d',
    color: '#FFF'
    
  },
});
