app.service('MenuService', function ($http, $location) {
    var self = this

    self.monday = {}
    self.tuesday = {}
    self.wednesday = {}
    self.thursday = {}
    self.friday = {}
    self.order = {}

    self.mondayMenu = function (user) {
        console.log('click');
{debugger}
        $http.get('/info/monday').then(function (response) {
            self.monday = response.json
            console.log(self.monday);
        })
    }

    self.tuesdayMenu = function (user) {
        console.log('click');
        $http.get('/info/tuesday').then(function(response) {
            self.tuesday = response
            console.log(self.tuesday);
        })
    }
    self.wednesdayMenu = function () {
        console.log('click');
        $http.get('/info/wednesday').then(function (response) {
            self.wednesday = response
            console.log(self.wednesday);
        })
    }
    self.thursdayMenu = function () {
        console.log('click');
        $http.get('/info/thursday').then(function (response) {
            self.thursday = response
            console.log(self.thursday);
        })
    }
    self.fridayMenu = function () {
        console.log('click');
        $http.get('/info/friday').then(function (response) {
            self.friday = response
            console.log(self.friday);
        })
    }
});
