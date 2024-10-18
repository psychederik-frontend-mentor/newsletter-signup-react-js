import desktopImage from '../../assets/images/illustration-sign-up-desktop.svg';
import mobileImage from '../../assets/images/illustration-sign-up-mobile.svg';

const Image = () => {
   return (
      <picture className="image-container">
         <source
            srcSet={desktopImage}
            id="image-desktop"
            media="(min-width: 675px)"
         />
         <source
            srcSet={mobileImage}
            id="image-mobile"
            media="(max-width: 675px)"
         />
         <img src={desktopImage} alt="Newsletter Illustration" />
      </picture>
   );
};

export default Image;
