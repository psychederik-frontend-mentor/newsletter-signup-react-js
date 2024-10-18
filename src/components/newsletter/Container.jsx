import { useState } from 'react';
import SuccessWrapper from '../success/SuccessWrapper';
import Wrapper from './Wrapper';

const Container = () => {
   const [subscribedEmail, setSubscribedEmail] = useState(null);
   const [error, setError] = useState('');

   function handleFormSubmit(email) {
      setSubscribedEmail(email);
      setError('');
   }

   function handleFormError(errorMsg) {
      setError(errorMsg);
   }

   function handleDismiss() {
      setSubscribedEmail(null);
   }

   return (
      <main className="container">
         {subscribedEmail ? (
            <SuccessWrapper
               subscribedEmail={subscribedEmail}
               onDismiss={handleDismiss}
            />
         ) : (
            <Wrapper
               onSubmit={handleFormSubmit}
               onError={handleFormError}
               errorMessage={error}
            />
         )}
      </main>
   );
};

export default Container;
