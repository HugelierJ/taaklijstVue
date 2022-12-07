const app = Vue.createApp({

    data() {
        return {
            nav_items: ["Home", "Link", "About", "Contact", "Profile","Test"],

        tag:"",
        }
    },
    methods:{
        textInput(itemnaam){
        this.tag = itemnaam;
        },
    },
    computed:{
    },
})