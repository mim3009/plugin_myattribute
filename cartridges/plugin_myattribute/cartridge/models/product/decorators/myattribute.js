'use strict';

module.exports = function (object) {
    Object.defineProperty(object, 'myAttribute', {
        enumerable: true,
        value: 'myAttribute',
        writable: true
    });
};
