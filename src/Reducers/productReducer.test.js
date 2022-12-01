import { productReducer } from "./ProductReducer";

const testProds=[{
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 3
    },
    {
      "id": 2,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Blue Polo",
      "type": "Polo",
      "price": 350,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 3
    },
    {
      "id": 3,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Pink Polo",
      "type": "Polo",
      "price": 350,
      "currency": "INR",
      "color": "Pink",
      "gender": "Women",
      "quantity": 6
    },]



describe("Product Reducer", () => {

    test("Fetching Products", () => {

        const initialState = {
            products: [],
            cart: [],
        };

        const expectedState = {
            products: [...testProds],
            cart: [],
        }

        const state = productReducer(initialState, {
            type: "PRODUCTS",
            payload: testProds
        })

        expect(state).toEqual(expectedState);
    })

  test("Adding Products to cart", () => {

        const initialState = {
            products: [],
            cart: [],
        };

        const expectedState = {
          products: [],
            cart: [{
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
              "quantity": 3,
       "orderQuantity":1
    }],
        }

        const state = productReducer(initialState, {
            type: "ADDTOCART",
            payload: {
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 3
    }
        })

        expect(state).toEqual(expectedState);
  })

  test("Removing Products from cart", () => {

        const initialState = {
            products: [],
            cart: [{
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
              "quantity": 3,
       "orderQuantity":1
    }],
        };

        const expectedState = {
          products: [],
            cart: [],
        }

        const state = productReducer(initialState, {
            type: "REMOVEFROMCART",
            payload: {
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 3
    }
        })

        expect(state).toEqual(expectedState);
    })


  test("Increase Product quantity in Cart", () => {

        const initialState = {
            products: [],
            cart: [{
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
              "quantity": 3,
       "orderQuantity":1
    }],
        };

        const expectedState = {
          products: [],
            cart: [{
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
              "quantity": 3,
       "orderQuantity":2
    }],
        }

        const state = productReducer(initialState, {
            type: "INCREMENTPRODUCTQUANTITY",
            payload: {
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 3
    }
        })

        expect(state).toEqual(expectedState);
  })

  test("Decrease Product quantity in Cart", () => {

        const initialState = {
            products: [],
            cart: [{
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
              "quantity": 3,
       "orderQuantity":2
    }],
        };

        const expectedState = {
          products: [],
            cart: [{
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
              "quantity": 3,
       "orderQuantity":1
    }],
        }

        const state = productReducer(initialState, {
            type: "DECREMENTPRODUCTQUANTITY",
            payload: {
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 3
    }
        })

        expect(state).toEqual(expectedState);
    })






})
