export const addProductToCart = (data) =>{
    return {
        type: 'ADD_PRODUCT_TO_CART',
        data
    }
}

export const removeProductFromCart = (data) =>{
    return {
        type: 'REMOVE_PRODUCT_FROM_CART',
        data
    }
}