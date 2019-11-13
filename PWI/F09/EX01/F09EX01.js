Vue.component('show-page',{
    props: {
        texto: {
            type: String,
            required: true
        },
        link: {
            type:String,
            required: true
        }
    },
    template: `<a :href='link' target='_blank'>{{texto}}</a>`
})

const vue = new Vue({
    el:"#intro",
})