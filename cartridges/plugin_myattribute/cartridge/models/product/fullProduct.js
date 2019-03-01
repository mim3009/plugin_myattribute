'use strict';

var decorators = require('*/cartridge/models/product/decorators/index');

module.exports = function fullProduct(product, apiProduct, options) {
    product = module.superModule(product, apiProduct, options);
    decorators.myattribute(product);

    return product;
};
