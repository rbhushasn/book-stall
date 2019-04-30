function addProduct(payload) {
    return {
        type: 'ADD_PRODUCT',
        payload
    };
};

function updateProduct(payload) {
    return {
        type: 'UPDATE_PRODUCT',
        payload
    };
};

function deleteProductMain(payload) {
    return {
        type: 'DELETE_PRODUCT',
        payload
    };
};

function deleteProduct(payload) {
    return (dispatch, getState)=> {
        let { products } = getState();
        if (products.length > 1) {
            dispatch(deleteProductMain(payload));
        }
    };
};

export {
    addProduct,
    updateProduct,
    deleteProduct
};