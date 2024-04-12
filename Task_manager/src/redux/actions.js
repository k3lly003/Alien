import {ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETE, MARK_INCOMPLETE, REMOVE_TODO, UPDATE_SEARCH_TERM} from "./actionTypes"

export const addTodo = (text) =>({
    type: ADD_TODO,
    payload: {text}
});

export const removeTodo = (id) =>({
    type: REMOVE_TODO,
    payload: {id}
});

export const  markIncomplete= (id) =>({
    type: MARK_INCOMPLETE,
    payload: {id}
});

export const markComplete = (id) =>({
    type: MARK_COMPLETE,
    payload: {id}
});

export const filterTodos = (filter) =>({
    type: FILTER_TODOS,
    payload: {filter}
});

export const markAllComplete = () =>({
    type: MARK_ALL_COMPLETED,
    payload: {}
});

export const updateSearchTerm = (searchTerm) =>({
    type: UPDATE_SEARCH_TERM,
    payload: {searchTerm}
});