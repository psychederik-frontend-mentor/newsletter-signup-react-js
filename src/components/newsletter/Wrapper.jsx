import PropTypes from 'prop-types';
import Content from './Content';
import Image from './Image';

const Wrapper = ({ onSubmit, onError, errorMessage }) => {
   return (
      <div className="newsletter-wrapper">
         <div className="content-column">
            <Content
               onSubmit={onSubmit}
               onError={onError}
               errorMessage={errorMessage}
            />
         </div>
         <div className="image-column">
            <Image />
         </div>
      </div>
   );
};

export default Wrapper;

Wrapper.propTypes = {
   onSubmit: PropTypes.string.isRequired,
   onError: PropTypes.string.isRequired,
   errorMessage: PropTypes.string.isRequired,
};
