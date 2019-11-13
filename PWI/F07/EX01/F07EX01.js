const vue = new Vue({
    el:"#intro",
    data:{
        id:0,
        country:"",
        continent:"",
        cities:"",
        description:"",
        dtInicial:"",
        dtFinal:"",
        type:"vacation",
        photo:"",
        travels:[],
        filterContinent:"",
        filterDtInicial:"",
        filterDtFinal:"",
    },
    created: function(){
        window.addEventListener('unload', this.saveStorage)
        if (localStorage.getItem("travels")){
            this.travels = JSON.parse(localStorage.getItem("travels"))
        }
    },
    destroyed(){
        localStorage.setItem("travels",JSON.stringify(this.travels))
    },
    methods:{
        getLastId(){
            if(this.travels.length){
                return this.travels[this.travels.length-1].id   
            }
            else{
                return 0
            }
        },
        addTravel(){
            this.travels.push({
                id: this.getLastId()+1,
                country:this.country,
                continent:this.continent,
                cities:this.cities,
                description:this.description,
                dtInicial:new Date(this.dtInicial),
                dtFinal:new Date(this.dtFinal),
                type:this.type,
                photo:this.photo,
        
            })

        },
        editTravel(id){
            const index = this.travels.findIndex(
                (travel) => travel.id === id
            )
            this.travels[index].country = prompt("Novo País",this.travels[index].country)
        },
        removeTravel(id){
            if(confirm("Deseja mesmo remover a viagem")){
            this.travels = this.travels.filter(
                (travel) => travel.id !== id          
            )
        }
        },
        compareCountry(a,b){
            if(a.country < b.country) return -1
            if(a.country > b.country) return 1
            else return 0
        },
        orderByCountry(){
            this.travels.sort(this.compareCountry)
        },
    },

        computed:{
            filteredTravels(){
                return this.travels.filter(
                    (travel) => {
                        let filterContinentResult = true
                        let filterDatesResult = true

                        //Filtrar Continente
                        if(this.filterContinent!==""){
                            filterContinentResult = travel.continent === this.filterContinent
                        }
                        //Filtrar Datas
                        if(this.filterDtInicial!=="" && this.filterDtFinal!=""){
                            filterDatesResult=
                            travel.startDate >= new Date(this.filterDtInicial) &&
                            travel.startDate <= new Date(this.filterDtInicial)
                        }
                        return filterContinentResult && filterDatesResult
                    } 
                )
            }
}
    

})

window.onunload=function(){
    vm.$destroyed()
}