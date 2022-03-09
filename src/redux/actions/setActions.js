export const addAction = (item) => {
    return {
        type: "ADD_ITEM",
        name: item.name,
        sub: item.sub,
        text: item.text
    }
}