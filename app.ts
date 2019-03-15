import $ from 'jquery';

$(document).ready(function () {

    let dice: any = [];
    //create a class tha represents one die.
    class Die {

        char: string = "";
        div: any = "";
        public value: number = 0;
        public div: JQuery<HTMLElement>;

        constructor() {
            this.div = $('<div class="diebox mx-3">,</div>');
            this.roll();
            $(this.div).appendTo('#dicebox');
            dice.push(this);
            $(this.div).click(() => {
                this.roll();
            });
            $(this.div).dblclick(() => {
                $(this.div).remove();
                dice.splice($.inArray(this,dice), 1);
            });
        }
        roll() {
            this.value = Math.floor(Math.random() * 6 + 1);
            this.getChar();
            $(this.div).text('' + this.char + '');
            $(this.div).addClass('die');

        }

        
        getChar() {
            if(this.value === 1) {
                this.char = "⚀";
            } else if (this.value === 2) {
                this.char = "⚁";
            } else if (this.value === 3) {
                this.char = "⚂";
            } else if (this.value === 4) {
                this.char = "⚃";
            } else if (this.value === 5) {
                this.char = "⚄";
            } else {
                this.char = "⚅";
            }
        };
    
    };

    $('#Butsum').click(() => {
        let sum = 0;
        for(let i = 0; i < dice.length; i++) {
            sum += dice[i].value;
        } 
        alert(`The sum of the die is ${sum}!`)
    });

    $('#Diebut').click(() => {
        let die = new Die;
    });

    $('#Butroll').click(() => {
        for(let i = 0; i < dice.length; i++) {
            dice[i].roll();
        };
    });

   

    // content close
});
