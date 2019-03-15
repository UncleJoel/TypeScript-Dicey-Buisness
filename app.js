"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
jquery_1.default(document).ready(function () {
    var dice = [];
    //create a class tha represents one die.
    var Die = /** @class */ (function () {
        function Die() {
            var _this = this;
            this.char = "";
            this.div = "";
            this.value = 0;
            this.div = jquery_1.default('<div class="diebox mx-3">,</div>');
            this.roll();
            jquery_1.default(this.div).appendTo('#dicebox');
            dice.push(this);
            jquery_1.default(this.div).click(function () {
                _this.roll();
            });
            jquery_1.default(this.div).dblclick(function () {
                jquery_1.default(_this.div).remove();
                dice.splice(jquery_1.default.inArray(_this, dice), 1);
            });
        }
        Die.prototype.roll = function () {
            this.value = Math.floor(Math.random() * 6 + 1);
            this.getChar();
            jquery_1.default(this.div).text('' + this.char + '');
            jquery_1.default(this.div).addClass('die');
        };
        Die.prototype.getChar = function () {
            if (this.value === 1) {
                this.char = "⚀";
            }
            else if (this.value === 2) {
                this.char = "⚁";
            }
            else if (this.value === 3) {
                this.char = "⚂";
            }
            else if (this.value === 4) {
                this.char = "⚃";
            }
            else if (this.value === 5) {
                this.char = "⚄";
            }
            else {
                this.char = "⚅";
            }
        };
        ;
        return Die;
    }());
    ;
    jquery_1.default('#Butsum').click(function () {
        var sum = 0;
        for (var i = 0; i < dice.length; i++) {
            sum += dice[i].value;
        }
        alert("The sum of the die is " + sum + "!");
    });
    jquery_1.default('#Diebut').click(function () {
        var die = new Die;
    });
    jquery_1.default('#Butroll').click(function () {
        for (var i = 0; i < dice.length; i++) {
            dice[i].roll();
        }
        ;
    });
    // content close
});
