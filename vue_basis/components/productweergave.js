app.component("product-weergave",{//de string die je hier invult word je nieuwe tag
    props:{//dit zijn vereisten.
      gold:{
          type:Boolean,
          required:true,

      }
    },
    template:
    `<div class="col-12 col-lg-6">
<!--            <img src="./images/oplader.jpg" class="img-fluid" alt="">-->
<!--            <img v-bind:src="image" class="img-fluid" alt="">-->
            <img :src="image" class="img-fluid" v-bind:alt="product"><!-- short hand notatie voor v-bind: is enkel  : -->
        </div>
        <div class="col-12 col-lg-6">
            <h1>{{ title }} - &euro; {{prijs}}</h1>
            <h2>{{ merk }}</h2>
            <h2>Beschrijving</h2>
            <p>{{ beschrijving }}</p>
            <h2>Voorraad - {{inVoorraad}}</h2>
            <p v-if="inVoorraad > 9">In Voorraad</p><!-- if is altijd true else is altijd false -->
            <p v-else-if="inVoorraad > 0 && inVoorraad <=9">Laatste Stuks</p>
            <p v-else>Niet In Voorraad</p>
            <h2>Details</h2>
            <ul>
                <li v-for="item in productDetails">
                    {{item}}
                </li>
            </ul>
            <h2>Soort</h2>
            <div class="kleurvak d-inline-block m-2 text-center" :style="{background:soort.kleur}" @mouseover="updateImageandStock(soort.soortId)" v-for="soort in soorten" v-bind:key="soort.soortId">
                {{soort.kleur}}
            </div>
            
            <h2>Verzendingskosten</h2>
            <p>Verzendkosten : {{ verzendkosten }}</p>
            <button v-on:click="addToCart" class="btn btn-outline-success my-3" :disabled="!inVoorraad && winkelwagen < inVoorraad"><i class="bi bi-cart-plus"></i></button>
            <button @click="addToCart" class="btn btn-outline-success my-3 ms-5" :disabled="!inVoorraad"><i class="bi bi-cart-plus"></i></button><!-- short-hand notatie.-->
            <review-lijst :reviews="reviews"></review-lijst>
            <review-form @toevoegenreview="toevoegenReview"></review-form>
            
        </div>
    `,
    data(){
        return {
            product: "Gsm oplader",
            merk : "White Label",
            prijs: 5,
            beschrijving : 'Gsm oplader draadloos',
            // image : "./images/img.png",
            // inVoorraad : 5,
            productDetails : ["universeel","smartphone","1 aansluiting","inclusief kabel","draadloos"],
            soorten : [
                {
                    soortId:1,
                    kleur:"red",
                    image:"./images/img2.png",
                    aantal : 20,
                },
                {
                    soortId:2,
                    kleur:"green",
                    image:"./images/img.png",
                    aantal : 5,
                }
            ],
            // winkelwagen:0,
            selectedProduct:0,
            reviews:[],
        }
    },
    methods:{
        addToCart(){
                // this.winkelwagen++;
            this.$emit('toevoegen-winkelwagen',this.soorten[this.selectedProduct].soortId);

        },
        updateImageandStock(index){
            this.selectedProduct = index-1;
        },
        toevoegenReview(review){
            this.reviews.push(review);
        }
    },
    computed:{
        title(){
            return this.product + ' ' + this.merk;
        },
        image(){
            return this.soorten[this.selectedProduct].image;
        },
        inVoorraad(){
            return this.soorten[this.selectedProduct].aantal;
        },
        verzendkosten(){
            if(this.gold){
                return "Gratis verzending"
            }
            return 9.99
        }
    }
})