import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ExpContext = createContext();

const BASE_URL = 'http://localhost:3000/api';

let today = new Date();
let todayDate =
   today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

export const ExpProvider = ({ children }) => {
   const [expenses, setExpenses] = useState(null);
   const [cat, setCat] = useState('Food');
   const [amount, setAmount] = useState(0);
   const [title, setTitle] = useState('');
   const [date, setDate] = useState(todayDate);
   const [toEdit, setToEdit] = useState(null);
   const [editing, setEditing] = useState(false);
   const [balance, setBalance] = useState(0);
   const [positives, setPositives] = useState(0);
   const [negatives, setNegatives] = useState(0);

   useEffect(() => {
      axios
         .get(`${BASE_URL}/exp_all`)
         .then((res) => {
            if (res.data.length === 0) return;
            setExpenses(res.data);
         })
         .catch((err) => {
            console.warn('ERROR: ', err);
         });
   }, []);

   useEffect(() => {
      if (expenses) {
         let totals = expenses.reduce(
            (acc, exp) => {
               acc.totalBalance += exp.amount;
               exp.cat_id !== '4'
                  ? (acc.totalNegatives += exp.amount)
                  : (acc.totalPositives += exp.amount);
               return acc;
            },
            { totalBalance: 0, totalNegatives: 0, totalPositives: 0 }
         );

         setBalance(totals.totalBalance);
         setNegatives(totals.totalNegatives);
         setPositives(totals.totalPositives);
      }
   }, [expenses, setBalance, setNegatives, setPositives]);

   const submitHandler = (e) => {
      e.preventDefault();

      // If cat is not "Salary", make amount negative
      let finalAmount = cat !== 'Salary' ? -Math.abs(amount) : parseInt(amount);

      const newExp = {
         cat,
         amount: finalAmount,
         title,
         date,
      };
      axios
         .post(BASE_URL, newExp)
         .then((res) => {
            if (res.status === 201) {
               setExpenses(res.data);
               setCat('');
               setAmount('');
               setTitle('');
               setDate(todayDate);
            }
         })
         .catch((err) => {
            console.warn('ERROR: ', err);
         });
   };

   const handleFormFill = (id) => {
      const found = expenses.find((exp) => exp.id === id); // if user exists fill input fields
      setCat(found.cat);
      setAmount(found.amount);
      setTitle(found.title);
      setDate(found.date);
   };

   const handleEdit = (id) => {
      setToEdit(id);
      handleFormFill(id);
      setEditing(true);
   };

   const handleSubmitEdit = () => {
      const editExp = {
         cat,
         amount,
         title,
         date,
      };
      axios
         .put(`${BASE_URL}/${toEdit}`, editExp)
         .then((res) => {
            if (res.status === 200) {
               setExpenses(res.data);
               setCat('');
               setAmount('');
               setTitle('');
               setDate(todayDate);
            }
         })
         .catch((err) => {
            console.warn('ERROR: ', err);
         });
   };

   const handleDelete = (e) => {
      e.preventDefault();
      axios
         .delete(`${BASE_URL}/${toEdit}`)
         .then((res) => {
            setExpenses(res.data);
            setCat('');
            setAmount('');
            setTitle('');
            setDate(todayDate);
         })
         .catch((error) => {
            console.warn('ERROR:', error);
         });
   };

   const handleCancel = (e) => {
      e.preventDefault();
      setEditing(false);
      setCat('');
      setAmount('');
      setTitle('');
      setDate(todayDate);
   };

   return (
      <ExpContext.Provider
         value={{
            submitHandler,
            handleEdit,
            expenses,
            setExpenses,
            cat,
            setCat,
            amount,
            setAmount,
            title,
            setTitle,
            date,
            setDate,
            editing,
            toEdit,
            setToEdit,
            handleSubmitEdit,
            handleDelete,
            balance,
            positives,
            negatives,
            handleCancel,
         }}
      >
         {children}
      </ExpContext.Provider>
   );
};
