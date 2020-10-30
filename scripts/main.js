const API = '';

const app = new Vue({
    el: '#app',
    data(){
        return{
            blackTheme: false,
            body: document.body
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError();
                });
        },
        getDark(){
            this.blackTheme = !this.blackTheme;
            if(this.body.classList.contains('darkForBody')){
                this.body.classList.remove('darkForBody');
            }else{
                this.body.classList.add('darkForBody');
            }
        },
    },
    mounted() {
        console.log(this);
    },
});