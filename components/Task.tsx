import { useEffect, useState } from 'react';
import React, { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import axios from 'axios';
import { title } from 'process';


interface TodoProps{
    id?: any;
    title: any;
    completed: boolean;
    userId: any;
    prev?: any;
    event?: any;
}

export default function Task({id, title, completed, event, prev, userId}: TodoProps) {
    const baseUrl = "https://jsonplaceholder.typicode.com/todos"

    const [todo, setTodo] = useState<TodoProps[]>([])
    const [edit, setEdit] = useState("")
    const [add, setAdd] = useState('')
    const [isloading, setLoading] = useState(true)
    const [deleteItem, setDeleteItem] = useState("")



    useEffect(() => {
        axios
        .get(`${baseUrl}`)
        .then((response) => {
            setTodo(response.data)
            console.log(response)
        })
        .catch((error) => {
                console.log(error);
        })
        .finally(() => {
            setLoading(false)
         }
        )
    }, [])

    const addTask = async () => {
        // e.preventDefault()
        axios
        .post(`${baseUrl}`, {
            title: title,
            userId: userId,
            completed: false
        })
        .then((response) => {
            setTodo((prev)=> [{title, userId, completed, id: Date.now()},...prev])
            console.log(response)
         })
         .catch((error) => {
            console.log(error)
         });
    }

    const editTask = async () => {
        axios
        .put(`${baseUrl}`, {
            title: title,
            userId: userId,
            completed: false
        })
        .then((response) => {
            console.log(response.data)
        })
    }

    const deleteTask = () => {

    }
   
    return (
        <View>
            {isloading ? 
                <View
                    style={{
                        paddingTop: 150,
                        alignItems: 'center',
                    }}
                > 
                    <Text>
                        <ActivityIndicator size='large' color="#FFF"/>
                    </Text> 
                </View> : (
             <><View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <TextInput
                        placeholder='what do you have planned?'
                        style={styles.textInput}
                        value={add}
                        onChange={({ nativeEvent: { eventCount, target, text } }) => {
                            setAdd(text);
                            console.log(text);
                        } } />
                    <TouchableOpacity
                        onPress={() => {
                            addTask();
                        } }
                    >
                        <Text style={styles.text}>Add Task</Text>
                    </TouchableOpacity>
                </View><ScrollView>
                        {todo.map((todo, id) => {
                            return (
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                    key={todo.id}
                                >
                                    <View style={styles.view}>
                                        <Text
                                            style={{
                                                color: '#fff',
                                            }}
                                        >{todo.title}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}
                                    >

                                        <TouchableOpacity
                                            style={{
                                                width: 50,
                                                height: 30,
                                                backgroundColor: 'blue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                            onPress={() => {
                                                editTask();
                                            } }
                                        >
                                            <Text
                                                style={{
                                                    color: '#FFF'
                                                }}
                                            >Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                width: 50,
                                                height: 30,
                                                backgroundColor: 'blue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: "#FFF"
                                                }}
                                            >Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView></> 
            )}
        </View>
    )
}

const styles = StyleSheet.create({
  
    textInput : {
      height: 40,
      width: 200,
      marginTop: 20,
      marginRight: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#4c4c4d',
      borderRadius: 10,
      backgroundColor: '#4c4c4d',
      color: '#FFF'
      
    },
    text : {
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      color: '#FFF',
      justifyContent: 'center',
      alignSelf: 'center',
      paddingTop: 15,
    },
    view : {
        backgroundColor: '#4c4c4d',
        height: 40,
        width: 200,
        marginVertical: 0,
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 10,
        marginTop: 10,

    }
  });


//   export default Task;
  