Vue.component('error', {
    data() {
        return {
            text: '',
            textDefault: 'Нет связи с сервером'
        }
    },
    methods: {
        setError(error) {
            this.text = error;
        },
    },
    computed: {
        isVisible() {
            return this.text !== '';
        },
    },
    mounted() {
        console.log(this);
    },
    template: `<div class="error-block" v-if="isVisible">
                    <p class="error-msg">
                        <button class="close-btn" @click="setError('')">x</button>
                        {{text}}
                    </p>
                    <p class="error-msg">{{textDefault}}</p>
               </div>`,
});