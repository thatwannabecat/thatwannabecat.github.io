'use strict'

angular.module('gamesList').component('gamesList', {
    templateUrl: './games-list.template.html',
    controller: ['$http', function GamesListController($http) {
        var self = this;

        $http.get('games/games-table.json').then(function (response) {
            self.games = response.data;
        });
    }]
});