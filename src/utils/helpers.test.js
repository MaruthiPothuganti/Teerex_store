import { searchProds,filterByColor,filterByGender,filterByPrice,filterByType,checkProdInCart } from "./helpers";


const prods=[{
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
    },{
      "id": 6,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Green Polo",
      "type": "Polo",
      "price": 350,
      "currency": "INR",
      "color": "Green",
      "gender": "Women",
      "quantity": 1
    },
    {
      "id": 7,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      "name": "Blue Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 2
    },
]

describe('Helper functions', () => {

    test('Searching Products based on color', () => {
        const blackProducts = searchProds(prods, "Black");
        expect(blackProducts).toEqual([{
            "id": 1,
            "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
            "name": "Black Polo",
            "type": "Polo",
            "price": 250,
            "currency": "INR",
            "color": "Black",
            "gender": "Men",
            "quantity": 3
        }]);
    });

    test('Searching Products based on type', () => {
        const blackProducts = searchProds(prods, "Hoodie");
        expect(blackProducts).toEqual([{
      "id": 7,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      "name": "Blue Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 2
    }]);
    });

    test('Searching Products based on name', () => {
        const blackProducts = searchProds(prods, "Blue Hoodie");
        expect(blackProducts).toEqual([{
      "id": 7,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      "name": "Blue Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 2
    }]);
    });

    test('Filter Products based on Price', () => {
        const productsFilterByPrice = filterByPrice(prods, {min:"449",max:"1000"});
        expect(productsFilterByPrice).toEqual([{
      "id": 7,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      "name": "Blue Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 2
    }]);
    });

    test('Filter Products based on No Price', () => {
        const productsFilterByPrice = filterByPrice(prods, {min:"",max:""});
        expect(productsFilterByPrice).toEqual(prods);
    });

    test('Filter Products based on Color', () => {
        const productsFilterByColor = filterByColor(prods, ["Pink","Black"]);
        expect(productsFilterByColor).toEqual([{
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
      "id": 3,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Pink Polo",
      "type": "Polo",
      "price": 350,
      "currency": "INR",
      "color": "Pink",
      "gender": "Women",
      "quantity": 6
    }]);
    });

     test('Filter Products based on No Color', () => {
        const productsFilterByColor = filterByColor(prods, []);
        expect(productsFilterByColor).toEqual(prods);
    });

    test('Filter Products based on Gender', () => {
        const productsFilterByGender = filterByGender(prods, ["Men"]);
        expect(productsFilterByGender).toEqual([{
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 3
    }]);
    });

    test('Filter Products based on No Gender', () => {
        const productsFilterByGender = filterByGender(prods, []);
        expect(productsFilterByGender).toEqual(prods);
    });

    test('Filter Products based on Type', () => {
        const productsFilterByType = filterByType(prods, ["Hoodie"]);
        expect(productsFilterByType).toEqual([{
      "id": 7,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      "name": "Blue Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 2
    }]);
    });

    test('Filter Products based on No Type', () => {
        const productsFilterByType = filterByType(prods, []);
        expect(productsFilterByType).toEqual(prods);
    });

    test('Check if Prod is present', () => {
        const check = checkProdInCart(prods, {
            "id": 1,
            "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
            "name": "Black Polo",
            "type": "Polo",
            "price": 250,
            "currency": "INR",
            "color": "Black",
            "gender": "Men",
            "quantity": 3
        });
        expect(check).toEqual({
            "id": 1,
            "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
            "name": "Black Polo",
            "type": "Polo",
            "price": 250,
            "currency": "INR",
            "color": "Black",
            "gender": "Men",
            "quantity": 3
        });
    })


     test('Check if Prod is not present', () => {
        const check = checkProdInCart(prods, {
            "id": 9,
            "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
            "name": "Black Polo",
            "type": "Polo",
            "price": 250,
            "currency": "INR",
            "color": "Black",
            "gender": "Men",
            "quantity": 1
        });
        expect(check).toBe(undefined);
    })
});
