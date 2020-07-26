const API = 'https://raw.githubusercontent.com/Konstantin108/MRM_RB/create_fetchapi/responses';

const app = new Vue({
    el: '#app',
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError();
                });
        }
    },
    mounted() {
        console.log(this);
    },
});