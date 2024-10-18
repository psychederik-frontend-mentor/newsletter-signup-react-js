import PropTypes from 'prop-types';

const BulletPoint = ({ icon, text }) => {
   return (
      <div className="bullet-point">
         <div className="bullet-icon">
            {typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
         </div>
         <span>{text}</span>
      </div>
   );
};

export default BulletPoint;

BulletPoint.propTypes = {
   icon: PropTypes.oneOfType([
      PropTypes.element.isRequired,
      PropTypes.string.isRequired,
   ]),
   text: PropTypes.string.isRequired,
};
