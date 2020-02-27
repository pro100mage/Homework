let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function () {
        setTimeout(function () {
            alert(this.message);
        }.bind(this), 3000);
    }
};

 coffeeMachine.start();