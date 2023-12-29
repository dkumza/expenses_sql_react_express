import { useContext } from 'react';
import { ExpContext } from './ExpContext';

const getCategoryInfo = (category) => {
   switch (category) {
      case '1':
         return ['bi-lightning-charge', 'Food'];
      case '2':
         return ['bi-house-heart', 'House'];
      case '3':
         return ['bi-balloon-heart', 'Health'];
      default:
         return ['bi-cash-stack', 'Salary'];
   }
};

export const Expense = ({ exp }) => {
   const { handleEdit } = useContext(ExpContext);

   // console.log(exp);

   const iconClass = getCategoryInfo(exp.cat_id);

   return (
      <div className="w-full" onClick={() => handleEdit(exp.id)}>
         <li className="flex w-full items-center border border-gray-100 rounded shadow px-1 py-1 hover:bg-gradient-to-r from-white to-gray-50 shadow-gray-300/50 hover:cursor-pointer">
            <div className="flex justify-center items-center px-3 mr-4 border-r">
               <i className={`bi ${iconClass[0]}`}></i>
            </div>
            <div className="category-item md:pr-8 pr-4">
               <h3 className="text-base">{iconClass[1]}</h3>
               <p className="text-xs font-normal text-gray-400">{exp.date}</p>
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
                  {exp.amount} EUR
               </h3>
            </div>
         </li>
      </div>
   );
};
