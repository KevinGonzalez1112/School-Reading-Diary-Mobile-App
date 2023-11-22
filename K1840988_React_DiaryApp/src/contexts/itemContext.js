import React, { useEffect, useReducer } from 'react';
// Importing Action Types from Helper file
import { actionTypes } from '../helpers/actionTypes';
// Importing AsyncStorage to later make saving possible
import  AsyncStorage  from '@react-native-async-storage/async-storage';

// Creating a storage key for this project
const STORAGE_KEY = "K1840988_storage_key";

const ItemContext = React.createContext();

// Creasting the blank array where all user created logs will be stored
let dummyData = [];

const reducer = (state, action) => {
switch (action.type) {
    case actionTypes.create:
    return [
    ...state,
    {
        id: Math.floor(Math.random() * 99999),
        studentName: action.payload.studentName,
        title: action.payload.title,
        date: new Date().toLocaleString(),
        startPage: action.payload.startPage,
        endPage: action.payload.endPage,
        review: action.payload.review,
        comments: action.payload.comments
    }
    ];
    
    case actionTypes.update:
    return state.map((e) => {
    if (e.id === action.payload.id) {
        return action.payload;
    }
    else {
        return e;
    }
    });
    
    case actionTypes.delete:
    return state.filter((e) => e.id !== action.payload.id);

    case actionTypes.save:
    try {
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    catch(e) {
        console.log(e);
    }
    finally {
        return state;
    }

    case actionTypes.load:
    return [
    ...state,
    {
        id: action.payload.id,
        studentName: action.payload.studentName,
        title: action.payload.title,
        date: action.payload.date,
        startPage: action.payload.startPage,
        endPage: action.payload.endPage,
        review: action.payload.review,
        comments: action.payload.comments
    }
    ];
    
    default:
    return state;
}
};
  
export const ItemProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, dummyData);

    useEffect( () => {
        const loadLogs = async () => {
            const storedLogs = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedLogs !== null && state.length === 0) {
                dummyData = JSON.parse(storedLogs);
                dummyData.forEach(element => {
                    dispatch({type: actionTypes.load, payload: element});
                })
            }
        } 
        loadLogs();
    }, [STORAGE_KEY]);

    const addItem = (studentName, title, startPage, endPage, review, comments, callback) => {
        dispatch({type: actionTypes.create, payload: {studentName, title, startPage, endPage, review, comments}});
        dispatch({type: actionTypes.save});
        if(callback){
            callback();
        }
    };
    
    const deleteItem = (id, callback) => {
        dispatch({type: actionTypes.delete, payload: {id: id}})
        dispatch({type: actionTypes.save});
        if (callback){
            callback();
        }
    }

    const updateItem = (id, studentName, date, title, startPage, endPage, review, comments, callback) => {
        dispatch({type: actionTypes.update, payload: {id, studentName, date, title, startPage, endPage, review, comments}});
        dispatch({type: actionTypes.save});
        if (callback){
            callback();
        }
    }

    return(
        <ItemContext.Provider value = {{
            state: state, 
            create: addItem,
            remove: deleteItem,
            update: updateItem
        }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;