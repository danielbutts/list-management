(function() {
  'use strict'

  angular.module('app', [])
    .component('cart', {

      controller: function () {
        const vm = this

        vm.$onInit = function () {
          vm.items = [
            {name:"honey", quantity:23},
            {name:"milk", quantity:34},
          ]
        }

        vm.addItem = function () {
          console.log(vm.item,vm.items);
          vm.items.push(vm.item)
          delete vm.item
        }

        vm.deleteItem = function (e, item) {
          e.preventDefault()
          vm.items.splice(vm.items.indexOf(item), 1)
        }

      },
      template: `
      <form ng-submit="$ctrl.addItem()">
      <label for="name">Name</label>
      <input type="text" id="name" ng-model="$ctrl.item.name"><br><br>
      <label for="quantity">Quantity</label>
      <input type="text" id="quantity" ng-model="$ctrl.item.quantity"><br><br>
      <input type="submit" value="Add Item">

      <br><br>
      Items:
      <div ng-repeat="item in $ctrl.items">
        <div>{{ item.name }}: {{ item.quantity }}
        <a href="#" ng-click="$ctrl.deleteItem($event, item)">Delete</a><div>
      </div>
      `
    })

}());
