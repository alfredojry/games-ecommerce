import data from '../products.json';

const images = {};

for (let item of data) {
    images[item.image] = require('/' + item.image);
}

export default images;