const app = Vue.createApp({

    data() {
        return {
            boodschappen: [
                {
                    product : "brood",
                    prijs   : 3.37,
                    background : "red",
                },
                {
                    product : "wortelen",
                    prijs   : 50,
                    background : "red",
                },
                {
                    product : "karcher",
                    prijs   : 700,
                    background : "red",
                },
                {
                    product : "salami",
                    prijs   : 8.31,
                    background : "red",
                }
            ],
            tag:"",
            totaal:0,
        }

    },
    methods:{
        addToTotal(boodschap){
        let test = boodschap.prijs.toFixed(2);
            if (boodschap.background == "green"){
                boodschap.background = "red"
                this.totaal -= +test
            }else{
                boodschap.background = "green";
                this.totaal += +test
            }

        },
    },
    computed:{

    },
})