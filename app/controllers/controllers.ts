/// <reference path='../../typings/all.d.ts' />
import angular = require("angular");
import mainController = require("./main");
import sidebarController = require("./sidebar");
import mallsAdminController = require("./malls_admin");
export var controllers = angular.module('controllers', ['ngResource', 'infinite-scroll', 'ngRoute'])
    .controller('MainCtrl', mainController.MainController)
    .controller('MallsAdminCtrl', mallsAdminController.MallsController)
    .controller('SidebarCtrl', sidebarController.SidebarController);