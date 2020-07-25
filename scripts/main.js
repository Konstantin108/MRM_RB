const API = 'https://raw.githubusercontent.com/Konstantin108/MRM_RB/create_fetchapi/responses';

const app = new Vue({
    el: '#app',
    data: {
        totalSum: 0,
        norma: '',
        price: '',
        show: false,
        showBusiness: false,
        showPrice: false,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    alert('Нет связи с сервером');
                });
        }
    },
    computed: {
        fixedTotalSum() {
            return this.totalSum.toFixed(2);
        },
        income() {
            return this.fixedTotalSum * this.price;
        },
        fixedIncome() {
            return this.income.toFixed(1);
        }
    },
    mounted() {
        console.log(this);
    },
});