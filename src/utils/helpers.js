export const ACTION_TYPES = {
    PRODUCTS: "PRODUCTS",
    ADDDTOCART: "ADDTOCART",
    REMOVEFROMCART: "REMOVEFROMCART",
    GENDER: "Gender",
    COLOUR: "Colour",
    PRICE: "Price",
    TYPE: "Type",
    RESET:"RESET",
}

//name type color
export const searchProds = (prods, searchText) => {

    return prods.filter(prod => {
        if (prod.name.toLowerCase().includes(searchText.toLowerCase())) {
            return prod
        } else if (prod.color.toLowerCase().includes(searchText.toLowerCase())) {
            return prod
        }else if (prod.type.toLowerCase().includes(searchText.toLowerCase())) {
            return prod
        }
    })
}

export const filterByPrice = (prods, price) => {
    if (price.min === "") {
        return prods
    } else {
        return prods.filter((prod) => prod.price >= price.min && prod.price <= price.max);
    }
}

export const filterByColor = (prods, colors) => {
    if (!colors.length) {
        return prods
    } else {
        return prods.filter((prod)=> colors.includes(prod.color))
    }
}

export const filterByGender = (prods, genders) => {
if (!genders.length) {
        return prods
    } else {
        return prods.filter((prod)=> genders.includes(prod.gender))
    }
}

export const filterByType = (prods, types) => {
if (!types.length) {
        return prods
    } else {
        return prods.filter((prod)=> types.includes(prod.type))
    }
}

