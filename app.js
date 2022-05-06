const diceArray = [];
counter = 0;


class Die {
    constructor() {
        this.div = $(`<div class= "dice col-2 h-200 w-200 d-flex justify-content-around m-3 border border-3 border-dark rounded-3 shadow-lg text-center align-items-center fs-1 fw-bold" id=${counter}></div>`);
        this.value = this.roll();
        this.div.text(this.value);
        this.div.css({backgroundColor: giveRandomColor()});
        $('#diceTray').append(this.div);
        this.roll();
        this.div.click( () => {
            this.value = this.roll();
            this.div.text(this.value);
        })
        this.div.dblclick( () => {
            this.div.remove();
            const dieIndex = diceArray.indexOf(this);
            diceArray.splice(dieIndex, 1);
        })      
    };

    roll() {
        return Math.floor(Math.random() * 6 + 1);
    };
};


$('#add-die').click(function() {
    diceArray.push(new Die());
    counter++;
});

$('#reroll').click(function() {
    diceArray.forEach((val) => {
        val.value = val.roll();
        val.div.text(val.value);
    })
})

$('#total').click(function() {
    let total = 0;
    diceArray.forEach((val) => {
        total += val.value
    })
    Swal.fire(`You rolled a total of ${total}!`);
})

function giveRandomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random() + 0.1;

    const rgbString = `rgba(${r}, ${g}, ${b}, ${a})`
    return rgbString;
}