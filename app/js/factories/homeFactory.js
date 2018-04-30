'use strict';

/* @ngInject */
module.exports = function HomeFactory($q, $http, AppSettings) {

  function getDogList() {
    var deferred = $q.defer();
    $http.get(AppSettings.backup_url).then(function(result){
      deferred.resolve(result);
    }, function(error){
      deferred.reject(error);
    });
    return deferred.promise;
  }

  function getSearchList(val) {
    var deferred = $q.defer();
    $http.get(AppSettings.backup_url).then(function(result){
      var results = _.filter(result.data, function(o) { return _.includes(_.toLower(o.breed_name), _.toLower(val));});
      deferred.resolve(results);
    }, function(error){
      deferred.reject(error);
    });
    return deferred.promise;
  }

  return {
    getDogList,
    getSearchList
  };

};