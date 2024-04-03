angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://ob-quiz-app-env.eba-natpkg53.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);