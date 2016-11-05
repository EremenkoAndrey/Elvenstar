new Component.Controller(function () {

    //waiting array with new get params
    this.on('addGetParams', function (newGetParams) {
        var paramsString = '';

        if(newGetParams) {
            paramsString = '?' + newGetParams
        }
        window.location = '//' + window.location.host + window.location.pathname + paramsString;

    });

});