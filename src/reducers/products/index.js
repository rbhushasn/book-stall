export default function(state = [{ id: 1, name: 'Book1', author: 'Ravi bhushan', description:'this is science book' }], action) {
    let products = JSON.parse(JSON.stringify(state));
    console.log("action : ",action.type);
    switch (action.type) {
     
        case 'ADD_PRODUCT': {
          let product = action.payload;
          product.id = Math.floor(Math.random() * 10000);
          products.push(product);
          return products;
        };

        case 'UPDATE_PRODUCT': {
            let product = action.payload;
            console.log(product);
            products = products.map((p)=> {
              if (p.id === product.id) {
                p.description= product.description ;
                return product;
              }
              return p;
            });
            return products;
        };

        case 'DELETE_PRODUCT': {
            let product = action.payload;
            products = products.filter((p)=> { return p.id !== product.id; });
            return products;
        };

        default: {
          return state;
        }

    };
};