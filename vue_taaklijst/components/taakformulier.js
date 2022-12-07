app.component("perTaak",{
    props:{
        userArr:{
            type:Array,
            required:true,
        },
    },
    template:`
    <div v-for="taak in userArr" class="col-lg-6 offset-lg-3">
            <div class="form-control input-group my-3 p-0">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox">
                </div>
                <p  class="m-0 ms-2"> {{ taak }} </p>
            </div>
        </div>
    `,
})