Vue.component('signatureComp', {
    template: `
        <transition 
            appear
            name="slide-in-fw">
            <div class="signature" :class="{blacksignature: this.$parent.$root.blackTheme}">
            <div class="clr-signature"></div>
                <div class="my-signature" :class="{myblacksignature: this.$parent.$root.blackTheme}">
                    <span class="v-info"><i>Version 2.9.7</i></span>
                    <span class="dev-info">developed by Kpstya</span>
                </div>
            </div>
        </transition>   
    `,
    mounted() {
        console.log(this);
    },
})