'use strict';

var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var viewData = res.getViewData();
    if (viewData.product) {
        viewData.product.myAttribute = 'MyAttribute changed!';
        res.setViewData(viewData);
    }

    next();
});

module.exports = server.exports();
