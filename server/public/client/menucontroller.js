app.controller('MenuController', function ($http, $location, MenuService) {
    console.log('menu controller created');
    var vm = this;
    vm.mondayItems = MenuService.monday
    vm.tuesdayItems = MenuService.tuesday
    vm.wednesdayItems = MenuService.wednesday
    vm.thursdayItems = MenuService.thursday
    vm.fridayItems = MenuService.friday


    vm.mondayMenu = function () {
        MenuService.mondayMenu()
        console.log('getting monday menu');

    }
    vm.tuesdayMenu = function () {
        MenuService.tuesdayMenu()
        console.log('getting tuesday menu');

    }
    vm.wednesdayMenu = function () {
        MenuService.wednesdayMenu()
        console.log('getting wednesday menu');

    }
    vm.thursdayMenu = function () {
        MenuService.thursdayMenu()
        console.log('getting thursday menu');

    }
    vm.fridayMenu = function () {
        MenuService.fridayMenu()
        console.log('getting friday menu');

    }
});
