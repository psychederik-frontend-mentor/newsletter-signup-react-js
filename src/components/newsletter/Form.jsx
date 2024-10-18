import { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

const Form = ({ onSubmit, onError, errorMessage }) => {
   const [email, setEmail] = useState('');

   function handleSubmit(e) {
      e.preventDefault();

      if (!validator.isEmail(email)) {
         onError('Valid email required');
         return;
      }

      onSubmit(email);
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className="label-container">
            <label htmlFor="email">Email address</label>
            {errorMessage && (
               <span className="error-message">{errorMessage}</span>
            )}
         </div>
         <input
            type="text"
            id="email"
            placeholder="example@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errorMessage ? 'input-error' : ''}
         />
         <button>Subscribe to monthly newsletter</button>
      </form>
   );
};

export default Form;

Form.propTypes = {
   onSubmit: PropTypes.string.isRequired,
   onError: PropTypes.string.isRequired,
   errorMessage: PropTypes.string.isRequired,
};
