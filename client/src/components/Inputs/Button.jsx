export const Button = ({ label, style, onButtonClick }) => {
   return (
      <div>
         <button
            onClick={onButtonClick}
            className={`${style} border px-8 py-2 rounded-md bg-gradient-to-l  font-semibold  hover:bg-gradient-to-b`}
         >
            {label}
         </button>
      </div>
   );
};
