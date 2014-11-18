var $UPP = $UPP || {};
$UPP.PROPS = $UPP.PROPS || {};
(function () {
    'use strict';
    var self = this;
    self.IDCHILDUPP ='5950';    //Identificator of the childupp
    self.URL_UPPLICATION_REST_SERVICE = 'http://dashboard.upplication.com/appsCommunication/rest/'; //Url where the Dashboard Server is located
    self.URL_ANALYTICS_REST_SERVICE = 'http://analytics.upplication.com/'; //Url where the Analytics Rest Service is located
    self.URL_DASHBOARD_SERVICE = 'http://dashboard.upplication.com/web/'; //Url where the Analytics Rest Service is located
    self.ASIDE_NAVBAR_MAX_WIDTH = 979;   //Max width of the mobile navbar. from 0px to 979px, mobile navbar solution is shown, from 980px, desktop solution
    self.DEFAULT_LANGUAGE = 'es';   //Default language for the app
    self.CHILDUPP_INACTIVE_CODES = [112, 123, 124];   //ErrorMessageCodes returned from server that disables the childupp
    self.CONF = {};
    self.CONF.MODULES = {
        ESHOP:{
            ADD2CART_AVAILABLE:true
        }
    };

    //self.PHONEGAP = false;
    //self.ANDROID = true;
    //self.IOS = false;

    self.PHONEGAP = true;
    self.ANDROID = false;
    self.IOS = true;

}).call($UPP.PROPS);

