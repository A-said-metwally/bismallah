const initState = {
    count : 0,
    color : "red",
    background : "yellow" 
}

const reducer = (state = initState , action) => {
    if(action.type == "INCREASE"){
        return {count: state.count + 1 , color:state.color}
    }else if(action.type == "DECREASE"){
        return {count: state.count - 1 , color:state.color}
    }

    return state;
}

export default reducer