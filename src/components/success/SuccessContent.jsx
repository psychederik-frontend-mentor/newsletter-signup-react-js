import PropTypes from 'prop-types';
import iconSuccess from '../../assets/images/icon-success.svg';

const SuccessContent = ({ subscribedEmail, onDismiss }) => {
   return (
      <div className="success-content">
         <img src={iconSuccess} className="success-image" alt="" />
         <h1>Thanks for subscribing!</h1>
         <p>
            A confirmation email has been sent to{' '}
            <strong>{subscribedEmail}</strong>. Please open it and click the
            button inside to confirm your subscription.
         </p>
         <button onClick={onDismiss}>Dismiss Message</button>
      </div>
   );
};

export default SuccessContent;

SuccessContent.propTypes = {
   subscribedEmail: PropTypes.string.isRequired,
   onDismiss: PropTypes.string.isRequired,
};
