Vue.component('signatureComp', {
    template: `
        <div class="signature">
        <div class="clr-signature"></div>
            <div class="my-signature">
                <span class="v-info"><i>Version 2.7</i></span>
                <span class="dev-info">developed by Kpstya</span>
            </div>
        </div>
    `,
    mounted() {
        console.log(this);
    },
})