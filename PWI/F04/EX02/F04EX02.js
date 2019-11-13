const vm = new Vue({
    el:"#intro",
    data: {
        schools: ["ESMAD", "ISEP", "ISCAP", "ESTG", "ESS", "ESHT"],
        char : "",
    },
    methods:{
        addSchool:function addSchool(){
            let newSchool = document.getElementById("addSchool").value;
            if(!this.schools.includes(newSchool)){
            this.schools.push(newSchool)
            }
            else{
                alert("ESCOLA JÁ ADICIONADA")
            }
            document.getElementById("addSchool").value = ""
        },
        filterSchool:function(char){
            this.char = char
        }
    },
    computed: {
        filterSchools() {
            return this.schools.filter(
                function(school){
                    return school.startsWith(this.char)
                }
            )
        },
        filterSchools2() {
            return this.schools.filter(
                (school) => school.startsWith(this.char)
            )
        }
    }
})
