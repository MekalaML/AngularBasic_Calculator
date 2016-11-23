var Calmodule = angular.module("calculator", []);
Calmodule.controller("Cntrl_cal", calculator);

function calculator() {
    this.addition = function () {
        this.self.calculationput = this.input1 + this.input2;
    }
    this.subtraction = function () {
        this.self.calculationput = this.input1 - this.input2;
    }
    this.multiply = function () {
        this.self.calculationput = this.input1 * this.input2;
    }
    this.division = function () {
        this.self.calculationput = this.input1 / this.input2;
    }

    this.calculation = 0;
    this.inputA = 0;
    this.inputB = 0;
    this.operator ='';
    this.addinput = function(val){
        var valSt = val.toString();
        var calSt = this.calculation.toString();
        if (this.calculation = 0){
            calSt = valSt;
        }else {
            calSt = calSt + valSt;
        }
        this.calculation = Number(calSt);
    }

    this.addope = function(ope){
        this.inputA = this.calculation;
        this.calculation = 0;
        this.operator = ope;
    }

    this.compute = function(){
        this.inputB = this.calculation;
        self = this;
        switch(this.operator){
            case '+':
                self.calculation = this.inputA + this.inputB;
                break;
            case '-':
                self.calculation = this.inputA - this.inputB;
                break;
            case '/':
                self.calculation = this.inputA / this.inputB;
                break;
            case '*':
                self.calculation = this.inputA * this.inputB;
                break;  
        }
    }
}
