const vm = new Vue({
    el: "#intro",
    data: {
        name:"" ,
        age:"",
        gener: "Feminino",
        licenciatura:"",
        checkedLanguages: [],
        motivation:"",
        mess:""

    },
    methods:{
        getReport: function(){
        //CALCULAR POINTS
        let points = 0;    
        if(this.licenciatura != ""){
            points +=5
        }
        
        if(this.age>=16 && this.age<22){
            points+=3
        }
        else if(this.age>=26 && this.age<35){
            points+=5
        }
        else if(this.age>=35){
            points+=1
        }
        let n = this.checkedLanguages.length
        points = points + (n*2)

        //MODAL
        const dlgReport = document.querySelector("#dlgReport")
        dlgReport.innerHTML=`<p>
        O candidato ${this.name}, de ${this.age} anos,
        ${this.licenciatura === "" ? 'não tem licenciatura.':'tem licenciatura em ' + this.licenciatura}. <br>
        ${this.checkedLanguages.length === 0 ? 'Não domina quaquer liguagem' : 'Domina as seguintes linguagens:'+ this.checkedLanguages} <br>
        A sua motivação para se candidatar a este emprego é ${this.motivation} <br>
        Pontuação final: ${points}
        <p>`

        dlgReport.showModal()
        }

        
    }

})
