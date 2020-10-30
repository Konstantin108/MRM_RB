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
    template: `<transition name="fade-window">
                   <div v-if="isVisible"
                        :class="{errorblack: this.$parent.$root.blackTheme, errorblock: !this.$parent.$root.blackTheme}">
                        <p :class="{errmsgblack: this.$parent.$root.blackTheme, errormsg: !this.$parent.$root.blackTheme}">
                            <button class="closebtn" @click="setError('')">x</button>
                            {{text}}
                        </p>
                        <p :class="{errmsgblack: this.$parent.$root.blackTheme, errormsg: !this.$parent.$root.blackTheme}">
                            {{textDefault}}
                        </p>
                   </div>
              </transition>     
        `,
});