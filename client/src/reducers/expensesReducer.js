export const expensesReducer = (state, action) => {
   let prevState = state === null ? [] : [...state];

   switch (action.type) {
      case 'GET_EXPENSES':
         return [...prevState, ...action.payload];
      default:
         throw new Error();
   }
};
