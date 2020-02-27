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

let calc2 = {
    getSum: function (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' + ' + this.y + ' = ' + calculator.sum.call(this, this.x, this.y);
    },
    getDiff: function (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' - ' + this.y + ' = ' + calculator.diff.call(this, this.x, this.y);
    },
    getMulti: function (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' * ' + this.y + ' = ' + calculator.multi.call(this, this.x, this.y);
    },
    getDiv: function (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' / ' + this.y + ' = ' + calculator.div.call(this, this.x, this.y);
    }
};

 alert(calc2.getSum(1, 1));
 alert(calc2.getDiv(1, 0));