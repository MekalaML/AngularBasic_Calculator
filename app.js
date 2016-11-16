var Calmodule = angular.module("calculator", []);
Calmodule.controller("Cntrl_cal", calculator);

function calculator() {
    this.addition = function () {
        this.output = this.input1 + this.input2;
    }
    this.subtraction = function () {
        this.output = this.input1 - this.input2;
    }
    this.multiply = function () {
        this.output = this.input1 * this.input2;
    }
    this.division = function () {
        this.output = this.input1 / this.input2;
    }

}