const initState = {
    list: [
        {name: 'Main heading', sub: 'Sub heading', text: 'This is some text'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "ADD_ITEM") {
        let newList = state.list;
        newList.push({
            name: action.name,
            sub: action.sub,
            text: action.text
        })

        return {
            ...state,
            list: newList
        }
    }

    return state;
}

export default rootReducer;