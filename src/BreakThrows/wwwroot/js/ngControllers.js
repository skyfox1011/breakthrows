/// <reference path="../lib/angular/angular.js" />
/// <reference path="../lib/angular/angular.min.js" />
(function () {
    "use strict";

    angular.module("ngBreakThrows")
        .value('characters', {})
        .controller("homeController", homeController)
        .controller("gameController", gameController)
        .controller("contactController", contactController)
        .controller("frameController", ['characters', '$routeParams', function (characters, $routeParams) {
            var vm = this;
            var key = $routeParams.character;

            if (typeof key !== 'undefined') {
                if (typeof characters[key] === 'undefined') {
                    if (key.toLowerCase() === 'katarina') {
                        characters['katarina'] = { first: 'Katarina', last: 'Alves', moves: katMoves() };
                    }
                    else if (key.toLowerCase() === 'claudio') {
                        characters['claudio'] = { first: 'Claudio', last: 'Serafino', moves: claudioMoves() };
                    }
                    else if (key.toLowerCase() === 'gigas') {
                        characters['gigas'] = { first: 'Gigas', last: '', moves: gigasMoves() };
                    }
                }
                vm.character = characters[key];
            }
            else {
                vm.character = null;
            }
        }]);

    function katMoves() {
        return [
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+2', hit: '+8', counter: '+8' },
            { command: 'LP,LP', hitLevel: 'HH', startUp: '', block: '-2', hit: '+4', counter: '+?' },
            { command: 'LP,LP~6', hitLevel: 'HH~HAR', startUp: '', block: '-?', hit: '+?', counter: '+?' },
            { command: 'LP,LP,LP', hitLevel: 'HHH', startUp: '', block: '-5', hit: '+1', counter: '+' },
            { command: 'LP,LP,RP', hitLevel: 'HHH', startUp: '', block: '+7', hit: '+9', counter: '+9' },
            { command: 'LP,LP,LK', hitLevel: 'HHM', startUp: '', block: '-7', hit: 'UTD', counter: 'UTD' },
            { command: 'LP,LP,RK', hitLevel: 'HHM', startUp: '', block: '-19', hit: 'U', counter: 'U' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-3', hit: '+3', counter: '+?' },
            { command: 'LP,RK', hitLevel: 'HL', startUp: '', block: '-12', hit: '+1', counter: '+1' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+2', hit: '+8', counter: '+8' },
            { command: 'LP,LP', hitLevel: 'HH', startUp: '', block: '-2', hit: '+4', counter: '+?' },
            { command: 'LP,LP~6', hitLevel: 'HH~HAR', startUp: '', block: '-?', hit: '+?', counter: '+?' },
            { command: 'LP,LP,LP', hitLevel: 'HHH', startUp: '', block: '-5', hit: '+1', counter: '+' },
            { command: 'LP,LP,RP', hitLevel: 'HHH', startUp: '', block: '+7', hit: '+9', counter: '+9' },
            { command: 'LP,LP,LK', hitLevel: 'HHM', startUp: '', block: '-7', hit: 'UTD', counter: 'UTD' },
            { command: 'LP,LP,RK', hitLevel: 'HHM', startUp: '', block: '-19', hit: 'U', counter: 'U' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-3', hit: '+3', counter: '+?' },
            { command: 'LP,RK', hitLevel: 'HL', startUp: '', block: '-12', hit: '+1', counter: '+1' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+2', hit: '+8', counter: '+8' },
            { command: 'LP,LP', hitLevel: 'HH', startUp: '', block: '-2', hit: '+4', counter: '+?' },
            { command: 'LP,LP~6', hitLevel: 'HH~HAR', startUp: '', block: '-?', hit: '+?', counter: '+?' },
            { command: 'LP,LP,LP', hitLevel: 'HHH', startUp: '', block: '-5', hit: '+1', counter: '+' },
            { command: 'LP,LP,RP', hitLevel: 'HHH', startUp: '', block: '+7', hit: '+9', counter: '+9' },
            { command: 'LP,LP,LK', hitLevel: 'HHM', startUp: '', block: '-7', hit: 'UTD', counter: 'UTD' },
            { command: 'LP,LP,RK', hitLevel: 'HHM', startUp: '', block: '-19', hit: 'U', counter: 'U' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-3', hit: '+3', counter: '+?' },
            { command: 'LP,RK', hitLevel: 'HL', startUp: '', block: '-12', hit: '+1', counter: '+1' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+2', hit: '+8', counter: '+8' },
            { command: 'LP,LP', hitLevel: 'HH', startUp: '', block: '-2', hit: '+4', counter: '+?' },
            { command: 'LP,LP~6', hitLevel: 'HH~HAR', startUp: '', block: '-?', hit: '+?', counter: '+?' },
            { command: 'LP,LP,LP', hitLevel: 'HHH', startUp: '', block: '-5', hit: '+1', counter: '+' },
            { command: 'LP,LP,RP', hitLevel: 'HHH', startUp: '', block: '+7', hit: '+9', counter: '+9' },
            { command: 'LP,LP,LK', hitLevel: 'HHM', startUp: '', block: '-7', hit: 'UTD', counter: 'UTD' },
            { command: 'LP,LP,RK', hitLevel: 'HHM', startUp: '', block: '-19', hit: 'U', counter: 'U' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-3', hit: '+3', counter: '+?' },
            { command: 'LP,RK', hitLevel: 'HL', startUp: '', block: '-12', hit: '+1', counter: '+1' }
        ];
    }

    function claudioMoves() {
        return [
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+1', hit: '+8', counter: '+8' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-1', hit: '+6', counter: '+6' },
            { command: 'RP', hitLevel: 'H', startUp: '12', block: '0', hit: '+?', counter: '+?' },
            { command: 'RP,LP', hitLevel: 'HM', startUp: '', block: '-11', hit: '0?', counter: '+?' },
            { command: 'RP,LP,RP', hitLevel: 'HMM', startUp: '', block: '-13', hit: 'KND', counter: 'KND' },
            { command: 'RK', hitLevel: 'H', startUp: '12', block: '-?', hit: '+?', counter: 'KND' },
            { command: 'RP,LK', hitLevel: 'HM', startUp: '', block: '-9?', hit: '+k', counter: '+k' },
            { command: 'WP', hitLevel: 'M', startUp: '17', block: '-14', hit: '', counter: '' },
            { command: '8RK', hitLevel: 'M', startUp: '15', block: '-13', hit: 'U', counter: 'U' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+1', hit: '+8', counter: '+8' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-1', hit: '+6', counter: '+6' },
            { command: 'RP', hitLevel: 'H', startUp: '12', block: '0', hit: '+?', counter: '+?' },
            { command: 'RP,LP', hitLevel: 'HM', startUp: '', block: '-11', hit: '0?', counter: '+?' },
            { command: 'RP,LP,RP', hitLevel: 'HMM', startUp: '', block: '-13', hit: 'KND', counter: 'KND' },
            { command: 'RK', hitLevel: 'H', startUp: '12', block: '-?', hit: '+?', counter: 'KND' },
            { command: 'RP,LK', hitLevel: 'HM', startUp: '', block: '-9?', hit: '+k', counter: '+k' },
            { command: 'WP', hitLevel: 'M', startUp: '17', block: '-14', hit: '', counter: '' },
            { command: '8RK', hitLevel: 'M', startUp: '15', block: '-13', hit: 'U', counter: 'U' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+1', hit: '+8', counter: '+8' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-1', hit: '+6', counter: '+6' },
            { command: 'RP', hitLevel: 'H', startUp: '12', block: '0', hit: '+?', counter: '+?' },
            { command: 'RP,LP', hitLevel: 'HM', startUp: '', block: '-11', hit: '0?', counter: '+?' },
            { command: 'RP,LP,RP', hitLevel: 'HMM', startUp: '', block: '-13', hit: 'KND', counter: 'KND' },
            { command: 'RK', hitLevel: 'H', startUp: '12', block: '-?', hit: '+?', counter: 'KND' },
            { command: 'RP,LK', hitLevel: 'HM', startUp: '', block: '-9?', hit: '+k', counter: '+k' },
            { command: 'WP', hitLevel: 'M', startUp: '17', block: '-14', hit: '', counter: '' },
            { command: '8RK', hitLevel: 'M', startUp: '15', block: '-13', hit: 'U', counter: 'U' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+1', hit: '+8', counter: '+8' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-1', hit: '+6', counter: '+6' },
            { command: 'RP', hitLevel: 'H', startUp: '12', block: '0', hit: '+?', counter: '+?' },
            { command: 'RP,LP', hitLevel: 'HM', startUp: '', block: '-11', hit: '0?', counter: '+?' },
            { command: 'RP,LP,RP', hitLevel: 'HMM', startUp: '', block: '-13', hit: 'KND', counter: 'KND' },
            { command: 'RK', hitLevel: 'H', startUp: '12', block: '-?', hit: '+?', counter: 'KND' },
            { command: 'RP,LK', hitLevel: 'HM', startUp: '', block: '-9?', hit: '+k', counter: '+k' },
            { command: 'WP', hitLevel: 'M', startUp: '17', block: '-14', hit: '', counter: '' },
            { command: '8RK', hitLevel: 'M', startUp: '15', block: '-13', hit: 'U', counter: 'U' }
        ];
    }

    function gigasMoves() {
        return [
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+1', hit: '+8', counter: '+8' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-14', hit: 'SBD', counter: 'SBD' },
            { command: 'RP', hitLevel: 'H', startUp: '10', block: '-5', hit: '+6?', counter: '+6?' },
            { command: 'RP,LP', hitLevel: 'HH', startUp: '', block: '-5?', hit: '+6?', counter: '+6?' },
            { command: 'LK', hitLevel: 'M', startUp: '14', block: '-9?', hit: '+?', counter: 'D' },
            { command: 'RK', hitLevel: 'M', startUp: '16', block: '-9?', hit: '+?', counter: 'D' },
            { command: '6RP', hitLevel: 'H', startUp: '16', block: '-9?', hit: '+?', counter: 'KZD' },
            { command: '6RP,LP', hitLevel: 'HH', startUp: '', block: '-?', hit: '+?', counter: '' },
            { command: '6RP,LP,LP', hitLevel: 'HHM', startUp: '', block: '-12?', hit: 'KMUD', counter: 'KMU' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+1', hit: '+8', counter: '+8' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-14', hit: 'SBD', counter: 'SBD' },
            { command: 'RP', hitLevel: 'H', startUp: '10', block: '-5', hit: '+6?', counter: '+6?' },
            { command: 'RP,LP', hitLevel: 'HH', startUp: '', block: '-5?', hit: '+6?', counter: '+6?' },
            { command: 'LK', hitLevel: 'M', startUp: '14', block: '-9?', hit: '+?', counter: 'D' },
            { command: 'RK', hitLevel: 'M', startUp: '16', block: '-9?', hit: '+?', counter: 'D' },
            { command: '6RP', hitLevel: 'H', startUp: '16', block: '-9?', hit: '+?', counter: 'KZD' },
            { command: '6RP,LP', hitLevel: 'HH', startUp: '', block: '-?', hit: '+?', counter: '' },
            { command: '6RP,LP,LP', hitLevel: 'HHM', startUp: '', block: '-12?', hit: 'KMUD', counter: 'KMU' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+1', hit: '+8', counter: '+8' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-14', hit: 'SBD', counter: 'SBD' },
            { command: 'RP', hitLevel: 'H', startUp: '10', block: '-5', hit: '+6?', counter: '+6?' },
            { command: 'RP,LP', hitLevel: 'HH', startUp: '', block: '-5?', hit: '+6?', counter: '+6?' },
            { command: 'LK', hitLevel: 'M', startUp: '14', block: '-9?', hit: '+?', counter: 'D' },
            { command: 'RK', hitLevel: 'M', startUp: '16', block: '-9?', hit: '+?', counter: 'D' },
            { command: '6RP', hitLevel: 'H', startUp: '16', block: '-9?', hit: '+?', counter: 'KZD' },
            { command: '6RP,LP', hitLevel: 'HH', startUp: '', block: '-?', hit: '+?', counter: '' },
            { command: '6RP,LP,LP', hitLevel: 'HHM', startUp: '', block: '-12?', hit: 'KMUD', counter: 'KMU' },
            { command: 'LP', hitLevel: 'H', startUp: '10', block: '+1', hit: '+8', counter: '+8' },
            { command: 'LP,RP', hitLevel: 'HH', startUp: '', block: '-14', hit: 'SBD', counter: 'SBD' },
            { command: 'RP', hitLevel: 'H', startUp: '10', block: '-5', hit: '+6?', counter: '+6?' },
            { command: 'RP,LP', hitLevel: 'HH', startUp: '', block: '-5?', hit: '+6?', counter: '+6?' },
            { command: 'LK', hitLevel: 'M', startUp: '14', block: '-9?', hit: '+?', counter: 'D' },
            { command: 'RK', hitLevel: 'M', startUp: '16', block: '-9?', hit: '+?', counter: 'D' },
            { command: '6RP', hitLevel: 'H', startUp: '16', block: '-9?', hit: '+?', counter: 'KZD' },
            { command: '6RP,LP', hitLevel: 'HH', startUp: '', block: '-?', hit: '+?', counter: '' },
            { command: '6RP,LP,LP', hitLevel: 'HHM', startUp: '', block: '-12?', hit: 'KMUD', counter: 'KMU' }
        ];
    }

    function homeController() {
        var vm = this;
        vm.name = "home page";
    }

    function gameController() {
        var vm = this;
        vm.name = "Game of BreakThrows";
        startGame();
    }

    function contactController() {
        var vm = this;
        vm.name = "Contact"
    }
})();