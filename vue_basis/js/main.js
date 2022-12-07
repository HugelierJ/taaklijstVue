const app = Vue.createApp({
    data(){
        return{
            winkelwagen:[],
            gold:true,
        }
    },
    methods:{
        updateWinkelwagen(id){
            // this.winkelwagen++
            this.winkelwagen.push(id)
        }
    }
})
