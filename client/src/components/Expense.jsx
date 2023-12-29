import { useContext } from 'react';
import { ExpContext } from './ExpContext';

const getIconClass = (category) => {
   switch (category) {
      case '1':
         return 'bi-lightning-charge';
      case '2':
         return 'bi-balloon-heart';
      case '3':
         return 'bi-house-heart';
      default:
         return 'bi-cash-stack';
   }
};

const getCatNames = (category) => {
   switch (category) {
      case '1':
         return 'Food';
      case '2':
         return 'Health';
      case '3':
         return 'House';
      default:
         return 'Salary';
   }
};

export const Expense = ({ exp }) => {
   const { handleEdit } = useContext(ExpContext);
   console.log(exp);

   const iconClass = getIconClass(exp.cat_id);
   const catName = getCatNames(exp.cat_id);

   return (
      <div className="w-full" onClick={() => handleEdit(exp.id)}>
         <li className="flex w-full items-center border border-gray-100 rounded shadow px-1 py-1 hover:bg-gradient-to-r from-white to-gray-50 shadow-gray-300/50 hover:cursor-pointer">
            <div className="flex justify-center items-center px-3 mr-4 border-r">
               <i className={`bi ${iconClass}`}></i>
            </div>
            <div className="category-item md:pr-8 pr-4">
               <h3 className="text-base">{catName}</h3>
               <p className="text-xs font-normal text-gray-400">
                  {exp.date.slice(0, 10)}
               </p>
            </div>
            <div className="text-sm text-gray-400">{exp.comment}</div>
            <div className="ml-auto  pr-4">
               <h3
                  className={
                     exp.amount > 0 && exp.cat_id === '4'
                        ? 'text-lime-400'
                        : 'text-rose-400'
                  }
               >
                  {exp.amount}{' '}
                  {/* {exp.amount > -1 && exp.cat !== "Salary"
                     ? parseInt(-exp.amount)
                     : parseInt(exp.amount)}{" "} */}
                  EUR
               </h3>
            </div>
         </li>
      </div>
   );
};
