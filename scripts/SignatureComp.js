Vue.component('signatureComp', {
    template: `
        <transition 
            appear
            name="slide-in-fw">
            <div class="signature">
            <div class="clr-signature"></div>
                <div class="my-signature">
                    <span class="v-info"><i>Version 2.9</i></span>
                    <span class="dev-info">developed by Kpstya</span>
                </div>
            </div>
        <transition>   
    `,
    mounted() {
        console.log(this);
    },
})