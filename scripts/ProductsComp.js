Vue.component('products', {
    data() {
        return {
            catalogUrl: '/productsData.json',
            products: []
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    },
    template: `
        <div class="container">
            <product v-for="product of products"
                     :key="product.id_product"
                     :product="product">
            </product>
        </div>
    `
});

Vue.component('product', {
    props: ['product'],
    template: `
         <div class="block-for-product">
              <div class="name">{{product.name}}</div>
                   <div class="product-content">
                        <div class="block-for-title">
                            <div class="num">{{product.col}}</div>
                            <div class="price">{{product.price}}</div>
                        </div>
                        <div class="block-for-btn">
                            <button @click="$emit('decreaseCol', product)">
                                <span class="text-btn">-</span>
                            </button>
                            <button @click="$emit('increaseCol', product)">
                                <span class="text-btn">+</span>
                            </button>
                   </div>
              </div>
         </div>
    `
})