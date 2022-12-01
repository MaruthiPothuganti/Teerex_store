import { filterReducer } from "./FilterReducer";



describe('Filter Reducer', () => {

    test('color inclusion', () => {

        const initialState= {
            colors: ["Red","Blue"],
            genders: ["Male"],
            types: ["Polo"],
            price: {min:"",max:""}
        }

        const expectedState ={
            colors: ["Red","Blue","Green"],
            genders: ["Male"],
            types: ["Polo"],
            price: {min:"",max:""}
        }

        const state = filterReducer(initialState, {
            type: "Colour",
            payload:"Green"
        })

    expect(state).toEqual(expectedState);
    });

     test('color inclusion', () => {

        const initialState= {
            colors: ["Red","Blue","Green"],
            genders: ["Male"],
            types: ["Polo"],
            price: {min:"",max:""}
        }

        const expectedState ={
            colors: ["Red","Blue"],
            genders: ["Male"],
            types: ["Polo"],
            price: {min:"",max:""}
        }

        const state = filterReducer(initialState, {
            type: "Colour",
            payload:"Green"
        })

    expect(state).toEqual(expectedState);
     });


       test('gender inclusion', () => {

        const initialState= {
            colors: ["Red","Blue"],
            genders: ["Male"],
            types: ["Polo"],
            price: {min:"20",max:"40"}
        }

        const expectedState ={
            colors: ["Red","Blue"],
            genders: ["Male","Female"],
            types: ["Polo"],
            price: {min:"20",max:"40"}
        }

        const state = filterReducer(initialState, {
            type: "Gender",
            payload:"Female"
        })

    expect(state).toEqual(expectedState);
       });

     test('gender exclusion', () => {

        const initialState= {
            colors: ["Red","Blue"],
            genders: ["Male","Female"],
            types: ["Polo"],
            price: {min:"20",max:"40"}
        }

        const expectedState ={
            colors: ["Red","Blue"],
            genders: ["Male"],
            types: ["Polo"],
            price: {min:"20",max:"40"}
        }

        const state = filterReducer(initialState, {
            type: "Gender",
            payload:"Female"
        })

    expect(state).toEqual(expectedState);
    });


           test('type inclusion', () => {

        const initialState= {
            colors: ["Red","Blue"],
            genders: ["Male","Female"],
            types: ["Polo"],
            price: {min:"20",max:"40"}
        }

        const expectedState ={
            colors: ["Red","Blue"],
            genders: ["Male","Female"],
            types: ["Polo","Basic"],
            price: {min:"20",max:"40"}
        }

        const state = filterReducer(initialState, {
            type: "Type",
            payload:"Basic"
        })

    expect(state).toEqual(expectedState);
       });

     test('type exclusion', () => {

        const initialState= {
            colors: ["Red","Blue"],
            genders: ["Male","Female"],
            types: ["Polo","Basic"],
            price: {min:"20",max:"40"}
        }

        const expectedState ={
            colors: ["Red","Blue"],
            genders: ["Male","Female"],
            types: ["Polo"],
            price: {min:"20",max:"40"}
        }

        const state = filterReducer(initialState, {
            type: "Type",
            payload:"Basic"
        })

    expect(state).toEqual(expectedState);
    });


               test('price inclusion', () => {

        const initialState= {
            colors: ["Red","Blue"],
            genders: ["Male","Female"],
            types: ["Polo"],
            price: {min:"",max:""}
        }

        const expectedState ={
            colors: ["Red","Blue"],
            genders: ["Male","Female"],
            types: ["Polo"],
            price: {min:"20",max:"40"}
        }

        const state = filterReducer(initialState, {
            type: "Price",
            payload:{min:"20",max:"40"}
        })

    expect(state).toEqual(expectedState);
       });

     test('reset', () => {

        const initialState= {
            colors: [],
            genders: [],
            types: [],
            price: {min:"",max:""}
        }

        const expectedState= {
            colors: [],
            genders: [],
            types: [],
            price: {min:"",max:""}
        }

        const state = filterReducer(initialState, {
            type: "Reset"

        })

    expect(state).toEqual(expectedState);
    });
});
