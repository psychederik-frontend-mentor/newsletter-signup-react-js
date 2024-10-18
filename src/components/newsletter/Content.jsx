import PropTypes from 'prop-types';
import BulletPoint from './BulletPoints';
import Form from './Form';
import listIcon from '../../assets/images/icon-list.svg';

const Content = ({ onSubmit, onError, errorMessage }) => {
   return (
      <div className="content">
         <h1>Stay updated!</h1>
         <p>Join 60,000+ product managers receiving monthly updates on:</p>
         <BulletPoint
            icon={listIcon}
            text="Product discovery and building what matters"
         />
         <BulletPoint
            icon={listIcon}
            text="Measuring to ensure updates are a success"
         />
         <BulletPoint icon={listIcon} text="And much more!" />

         <Form
            onSubmit={onSubmit}
            onError={onError}
            errorMessage={errorMessage}
         />
      </div>
   );
};

export default Content;

Content.propTypes = {
   onSubmit: PropTypes.string.isRequired,
   onError: PropTypes.string.isRequired,
   errorMessage: PropTypes.string.isRequired,
};
