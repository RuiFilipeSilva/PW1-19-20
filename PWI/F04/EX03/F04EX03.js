const vm = new Vue({
    el:"#intro",
    data:{
        teams: [
            {name: "Benfica", year: 1910, location: "Lisboa"},
            {name: "Porto", year: 1912, location: "Porto"},
            {name: "Sporting", year: 1914, location: "Lisboa"}
        ],
        location: "",
    },
    methods:{
        addTeam:function (name,year,location){
            this.teams.push({name:name, year:year, location:location})

        },
        filterTeam (location){
            this.location = location
        }

    },
    computed: {
        filterTeams(){
            if(this.location !== ""){
            return this.teams.filter(
                team => team.location === this.location
            )
        }
        else{
            return this.teams
        }
        }
    }
})