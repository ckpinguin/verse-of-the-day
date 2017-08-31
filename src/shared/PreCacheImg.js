import PropTypes from 'prop-types';

PreCacheImg.propTypes = {
    images: PropTypes.arrayOf.isRequired,
};

function PreCacheImg(props) {
    const precache = (images) => {
        let image;
        images.map((img) => {
            image = new Image(); // eslint-disable-line no-undef
            image.src = img;
        });
        return false;
    };

    return precache(props.images);
}

export default PreCacheImg;