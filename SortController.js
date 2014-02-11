var app = angular.module('sort', []);

app.controller('SortController', function($scope) {
    $scope.people =  [{
        name: "John W. Smith",
        familyName: "Smith",
        birthDayNumber: 2418938.000000, // Julian Calendar Day. It's just a floating-point number. Higher values are later dates.
        birthCountry: "United States"
    },{
        name: "William Smith",
        familyName: "Smith",
        birthDayNumber: 2418937.000000,
        birthCountry: "United States"
    },{
        name: 'Jared Jones',
        familyName: 'Jones',
        birthDayNumber: 2535745.000000,
        birthCountry: "France"
    },{
        name: 'Jeff N Olsen',
        familyName: 'Olsen',
        birthDayNumber: 2536745.000000,
        birthCountry: "United States"
    }];

    $scope.sort = function() {
       var fields = [];
        if ($scope.name) {
            fields.push({field: 'name', direction: 'ASC'})
        }
        if ($scope.familyName) {
            fields.push({field: 'familyName', direction: 'ASC'})
        }
        if ($scope.birthDayNumber) {
            fields.push({field: 'birthDayNumber', direction: 'ASC'})
        }
        if ($scope.birthCountry) {
            fields.push({field: 'birthCountry', direction: 'ASC'})
        }
        $scope.people = sort.sortObjectArray($scope.people, fields);
    }
});