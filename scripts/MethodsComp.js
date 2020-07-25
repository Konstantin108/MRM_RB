Vue.component('methodsComp', {
    data() {
        return {
            addUrl: '/increaseCol.json',
            delUrl: '/decreaseCol.json',
            totalSum: 0,
            norma: '',
            price: '',
            show: false,
            showBusiness: false,
            showPrice: false,
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
    template: `
        <transition
            appear
            name="header-in">
            <header>
                <div class="label"></div>
                <div class="block-for-stat">
                    <div class="comp-block">
                        <div class="circle active-circle" @click="show=!show">
                            <span v-if="norma.length != 0">{{norma}}</span>
                            <span class="empty-plan" v-else>Укажите план УП</span>
                        </div>
                        <span>Норматив УП</span>
                    </div>
                    <div class="comp-block">
                        <div class="circle">{{fixedTotalSum}}</div>
                        <span>Текущий УП</span>
                    </div>
                </div>
                <div class="block-for-business" v-if="showBusiness">
                    <div class="bus-container">
                        <div class="bus-block">
                            <div class="pos-for-rubel">
                                <div class="rubel">{{fixedIncome}} &#8381;</div>
                            </div>
                            <span class="title-bus">Итого сегодня</span>
                        </div>
                        <div class="bus-block">
                            <div class="pos-for-rubel">
                                <div class="bus-price" @click="showPrice=!showPrice">
                                    <span class="rubel" v-if="price.length != 0">{{price}} &#8381;</span>
                                    <span class="empty-price" v-else>0 &#8381;</span>
                                    <i class="fas fa-pen"></i>
                                </div>
                            </div>
                            <span class="title-bus">Стоимость УП</span>
                        </div>
                    </div>
                </div>
                <transition name="fade-window">
                    <div class="window" v-if="show">
                        <input type="number" @click="norma=''" v-model.lazy="norma"
                               onkeypress="this.value=this.value.substring(0,3);">
                        <i class="fas fa-check-square" @click="show=!show"></i>
                    </div>
                </transition>   
                <transition name="fade-price"> 
                    <div class="window-price" v-if="showPrice">
                        <input type="number" @click="price=''" v-model.lazy="price"
                               onkeypress="this.value=this.value.substring(0,3);">
                        <i class="fas fa-check-square" @click="showPrice=!showPrice"></i>
                    </div>
                </transition>
                <transition
                    appear
                    name="fade-btn">
                    <div class="business" @click="showBusiness=!showBusiness">
                        <i class="fas fa-ruble-sign bus-icon" v-if="showBusiness"></i>
                        <i class="fas fa-calculator bus-icon" v-if="!showBusiness"></i>
                    </div>
                </transition>    
            </header>
        </transition>    
    `
})