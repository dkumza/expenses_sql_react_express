import { useContext } from "react";
import { ExpContext } from "./ExpContext";

export const New = () => {
   const {
      cat,
      setCat,
      amount,
      setAmount,
      title,
      setTitle,
      submitHandler,
      date,
      setDate,
      editing,
      handleSubmitEdit,
      handleDelete,
      handleCancel,
   } = useContext(ExpContext);

   return (
      <div className=" md:pb-4 md:pt-6 p-3 min-w-[420px] w-full mt-2">
         <h1 className="py-2  font-semibold">
            Fill form to add new transaction
         </h1>
         <form
            className="flex flex-col gap-4 w-full justify-center items-center px-1"
            onSubmit={submitHandler}
         >
            <div className="flex gap-2 w-full">
               <div className="relative h-10 w-1/2 min-w-[100px]">
                  <select
                     value={cat}
                     onChange={(e) => setCat(e.target.value)}
                     required
                     className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent outline-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  >
                     <option value="Food">Food</option>
                     <option value="House">House</option>
                     <option value="Health">Health</option>
                     <option value="Salary">Salary</option>
                  </select>
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Select a category
                  </label>
               </div>
               <div className="relative h-10 w-1/2 min-w-[100px]">
                  <input
                     value={amount}
                     onChange={(e) => setAmount(e.target.value)}
                     required
                     type="number"
                     className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent outline-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  ></input>
                  <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Select Amount
                  </label>
               </div>
            </div>
            <div className="flex gap-2 w-full">
               <div className="relative h-10 w-1/2 min-w-[100px]">
                  <input
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     required
                     type="text"
                     className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent outline-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  ></input>
                  <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Description
                  </label>
               </div>
               <div className="relative h-10 w-1/2 min-w-[100px]">
                  <input
                     value={date}
                     onChange={(e) => setDate(e.target.value)}
                     required
                     type="date"
                     className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent outline-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  ></input>
                  <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Enter Date
                  </label>
               </div>
            </div>
            {!editing && (
               <button className="border px-8 py-2 rounded-md bg-gradient-to-r from-sky-400 to-sky-500  text-white font-semibold  hover:bg-gradient-to-b">
                  ADD
               </button>
            )}
            {editing && (
               <div className="wrap flex gap-2 font-semibold">
                  <button
                     onClick={handleSubmitEdit}
                     className="border w-24 py-2 rounded-md bg-gradient-to-r from-lime-400 to-lime-500 text-white font-semibold  hover:bg-gradient-to-b"
                  >
                     Confirm
                  </button>
                  <button
                     onClick={handleDelete}
                     className="border w-24 py-2 rounded-md bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:bg-gradient-to-b"
                  >
                     Delete
                  </button>
                  <button
                     onClick={handleCancel}
                     className="border w-24 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:bg-gradient-to-b"
                  >
                     Cancel
                  </button>
               </div>
            )}
         </form>
      </div>
   );
};
