Vue.component('methodsComp', {
    data() {
        return {
            addUrl: '/increaseCol.json',
            delUrl: '/decreaseCol.json'
        }
    },
    methods: {
        increaseCol(product) {
            this.$parent.getJson(`${API + this.addUrl}`)
                .then(data => {
                    if (data.result === 1) {
                        product.total += product.price;
                        this.totalSum += product.price;
                        product.col++;
                        product.fixTotal = product.total.toFixed(2);
                        console.log(+1);
                    } else {
                        alert('Сервер не отвечает');
                    }
                });
        },
        decreaseCol(product) {
            this.$parent.getJson(`${API + this.delUrl}`)
                .then(data => {
                    if (data.result === 1) {
                        if (product.col > 0) {
                            product.total -= product.price;
                            product.col--;
                            this.totalSum -= product.price;
                            product.fixTotal = product.total.toFixed(2);
                            console.log(-1);
                        } else {
                            product.total = 0;
                            product.col = 0;
                        }
                    } else {
                        alert('Сервер не отвечает');
                    }
                });
        },
    },
    mounted() {
        console.log(this);
    },
    template: `
        <div>methodsComp</div>
    `
})