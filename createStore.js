import { bindActionCreators, createStore, combineReducers } from "redux";
const ADD_TODO = 'add_todo';
const DEL_TODO = 'delete_todo'
const UPD_TODO = 'edit_todo'
const ADD_USER = 'add_user'
function todoReducer(state = [] ,action){
    if(action.type === ADD_TODO){
        const todoText = action.payload.todoText
        return [
            ...state,
            {text : todoText, isFinished:false, id : (state.length === 0) ? 1 :  state[state.length - 1].id + 1}
        ]
    }else if(action.type === DEL_TODO){
        const todoId = action.payload.todoId
        return state.filter((t) => t.id !== todoId)

    }else if(action.type === UPD_TODO){
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
      return state.map((t) => {
        if(t.id === todo.id){
            t.text = todoText
        }
        return t;
      })
    }else{
        return state;
    }
}

function userReducer(state = [],action){
    if(action.type === ADD_USER){
        const userName = action.payload.userName;
        return[
            ...state,
            {name : userName, id : (state.length === 0) ? 1 :  state[state.length - 1].id + 1}
        ]
    }
    return state;
}

// action object → action method (action creator)
const addTodo = (todoText) => ({type : ADD_TODO, payload : { todoText } })
const delTodo = (id) => ({type : DEL_TODO, payload : { todoId : id}} )
const  addUser = (name) => ({type : ADD_USER, payload : {userName : name }})

const reducer = combineReducers({todo : todoReducer, user : userReducer})

const {dispatch, subscribe,getState,replaceReducer} = createStore(reducer)

subscribe(() => console.log(getState()))

const action = bindActionCreators({addTodo,delTodo, addUser}, dispatch)
console.log('this one is action',action)

action.addTodo('todo 1')
action.addTodo('todo 2')
action.addUser('nitishOfficial')
action.delTodo(1)
