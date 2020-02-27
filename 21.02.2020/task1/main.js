let calculator = {
    read: function () {
        this.x = +prompt("Введите первое число");
        this.y = +prompt("Введите второе число");
    },

    sum: function () {
        return this.x + this.y;
    },

    multi: function () {
        return this.x * this.y;
    },

    diff: function () {
        return this.x - this.y;
    },

    div: function () {
        return this.x / this.y;
    }
};

 calculator.read();
 alert( calculator.sum() );
 alert( calculator.multi() );