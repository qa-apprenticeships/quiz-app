angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapims-env.eba-424vz72p.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);