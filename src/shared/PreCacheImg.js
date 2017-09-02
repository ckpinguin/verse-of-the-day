import PropTypes from 'prop-types';

PreCacheImg.propTypes = {
    images: PropTypes.array.isRequired,
};

function PreCacheImg(props) {
    const precache = (images) => {
        let image;
        images.map((img) => { // eslint-disable-line array-callback-return
            image = new Image(); // eslint-disable-line no-undef
            image.src = img;
        });
        return false;
    };

    return precache(props.images);
}

export default PreCacheImg;