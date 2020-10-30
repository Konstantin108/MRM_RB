Vue.component('products', {
    data() {
        return {
            catalogUrl: '/productsData.json',
            products: [],
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        console.log(this);
    },
    template: `
        <transition 
            appear
            name="slide-in-fwd-bottom">
            <div class="container">
                <product v-for="product of products"
                         :key="product.id_product"
                         :product="product">
                </product>
            </div>
        </transition>     
    `
});

Vue.component('product', {
    props: ['product'],
    data() {
        return {
            methodsAPI: this.$root.$refs.methodsComp
        }
    },
    template: `
             <div class="block-for-product" :class="{darkproduct: this.$parent.$root.blackTheme}">
                  <div class="name">{{product.name}}</div>
                       <div class="product-content">
                            <div class="block-for-title">
                                <div class="num">{{product.col}}</div>
                                <div class="price">{{product.price}}</div>
                            </div>
                            <div class="block-for-btn">
                                <button
                                    @click="methodsAPI.decreaseCol(product)"
                                    :class="{btndark: this.$parent.$root.blackTheme}">
                                    <span class="text-btn"
                                        :class="{textbtndark: this.$parent.$root.blackTheme}">-</span>
                                </button>
                                <button
                                    @click="methodsAPI.increaseCol(product)"
                                    :class="{btndark: this.$parent.$root.blackTheme}">
                                    <span class="text-btn"
                                        :class="{textbtndark: this.$parent.$root.blackTheme}">+</span>
                                </button>
                       </div>
                  </div>
             </div>       
    `
})