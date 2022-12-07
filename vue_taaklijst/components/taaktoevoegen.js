app.component("taak-toevoegen",{
    template:`
    <div class="col-lg-6 offset-lg-3">
    <form @submit.prevent="taakToevoegen" class="text-center input-group mb-3">
    <input v-model="taakInput" type="text" class="form-control" placeholder="taak...">
        <button class="btn btn-outline-secondary" type="submit" id="userTaak"><i class="bi bi-plus"></i>
        </button>
    </form>
</div>
<hr>
 <perTaak v-bind:userArr="userArr"></perTaak>
    `,
    data(){
        return{
            taakInput:"",
            userArr:[],
        }
    },
    methods:{
        taakToevoegen(){
            console.log()
            console.log(this.taakInput)

            this.userArr.push(this.taakInput)
            this.taakInput='';
        }
    },
    computed:{

    }
})
