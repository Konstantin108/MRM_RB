const app = new Vue({
    el: '#app',
    data: {
        products: [
            {name: 'АП ЖКХ', price: 0.13, total: 0, col: 0, fixTotal: 0},
            {name: 'АП ГИБДД', price: 0.11, total: 0, col: 0, fixTotal: 0},
            {name: 'БКИ', price: 0.30, total: 0, col: 0, fixTotal: 0},
            {name: 'УК (МБ)', price: 0.04, total: 0, col: 0, fixTotal: 0},
            {name: 'МП', price: 0.24, total: 0, col: 0, fixTotal: 0},
            {name: 'МП реактивация', price: 0.10, total: 0, col: 0, fixTotal: 0},
            {name: 'Клиенты', price: 0.00, total: 0, col: 0, fixTotal: 0},
            {name: 'Сбермобайл', price: 0.12, total: 0, col: 0, fixTotal: 0},
            {name: 'Актуализация', price: 0.02, total: 0, col: 0, fixTotal: 0},
            {name: 'Перевод пенсии', price: 0.25, total: 0, col: 0, fixTotal: 0},
            {name: 'Сбор согласий', price: 0.03, total: 0, col: 0, fixTotal: 0},
            {name: 'PUSH-уведомления', price: 0.04, total: 0, col: 0, fixTotal: 0},
            {name: 'Сбермобайл', price: 0.24, total: 0, col: 0, fixTotal: 0},
            {name: 'Сбермобайл', price: 0.30, total: 0, col: 0, fixTotal: 0},
            {name: 'Сбермобайл', price: 0.36, total: 0, col: 0, fixTotal: 0},
            {name: 'КК', price: 0.99, total: 0, col: 0, fixTotal: 0},
            {name: 'Сбор "Лицо"', price: 0.06, total: 0, col: 0, fixTotal: 0},
            {name: 'Сбор "Голос"', price: 0.06, total: 0, col: 0, fixTotal: 0},
            {name: 'ОККО', price: 0.1, total: 0, col: 0, fixTotal: 0},
            {name: 'СберМаркет', price: 0.04, total: 0, col: 0, fixTotal: 0},
        ],
        totalSum: 0
    },
    methods: {
        increaseCol(item) {
            item.total += item.price;
            this.totalSum += item.price;
            item.col++;
            item.fixTotal = item.total.toFixed(2);
        },
        decreaseCol(item) {
            if (item.col > 0) {
                item.total -= item.price;
                item.col--;
                this.totalSum -= item.price;
                item.fixTotal = item.total.toFixed(2);
            } else {
                item.total = 0;
                item.col = 0;
            }
        }
    },
    computed: {
        fixedTotalSum() {
            return this.totalSum.toFixed(2);
        },
    },
    mounted() {
        console.log(this);
    },
});