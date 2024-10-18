import PropTypes from 'prop-types';
import SuccessContent from './SuccessContent';

const SuccessWrapper = ({ subscribedEmail, onDismiss }) => {
   return (
      <div className="success-wrapper">
         <SuccessContent
            subscribedEmail={subscribedEmail}
            onDismiss={onDismiss}
         />
      </div>
   );
};

export default SuccessWrapper;

SuccessWrapper.propTypes = {
   subscribedEmail: PropTypes.string.isRequired,
   onDismiss: PropTypes.string.isRequired,
};
