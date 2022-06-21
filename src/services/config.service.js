angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quizapicb-env.eba-m28fmepb.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);