const initialCartState = {
    shoppingCartList: [],
    total: 0
}

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            const newArray = [...state.shoppingCartList, action.data ]
            //Check the current state arrray... look for duplicate... instead of adding to the array... change the quanitity of the matched
            //object in that 
            return {...state, shoppingCartList: newArray, total: state.total + action.data.price  };
        case "REMOVE_PRODUCT_FROM_CART":
            console.log(action.data)
            const productThatHasToGo = action.data
            const secondNewArray = state.shoppingCartList.filter(product =>{
                if(product.name !== productThatHasToGo.name){
                    return true
                }else{
                    return false
                }
            })
            console.log(secondNewArray)
            return {...state, shoppingCartList: secondNewArray, total: state.total - productThatHasToGo.price }
        default:
            return state;
    }
}

export default cartReducer