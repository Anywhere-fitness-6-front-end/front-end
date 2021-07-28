export const initialState = {
    booked: [],
}
const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'BOOK_CLASS': 
        return { 
            ...state,
            booked: [...state.booked, action.class]
        }
        // Logic
        case 'DROP_CLASS':
            //cloned (made a copy of) the booked array
         let newBooked = [...state.booked];
            //checked to see if booked class exists by ID
         const index = state.booked.findIndex((bookedClass) => bookedClass.id === action.id)
            // If the class exists, remove it 
         if (index >= 0 ) {
            newBooked.splice(index, 1)
         } else {
             console.warn(`Cant remove class (id:${action.id}) as its not in booked`)
         }
         return {...state, booked: newBooked} // returning the new state
        default: 
            return state;
    }
}

export default reducer;