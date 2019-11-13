const vm = new Vue({
    el:"#intro",
    data:{
        id:0,
        name:"",
        type:"pessoal",
        tasks : [],
        filter :"todos"
    },
    created: function(){
        window.addEventListener('unload', this.saveStorage)
        if (localStorage.getItem("tasks")){
            this.tasks = JSON.parse(localStorage.getItem("tasks"))
        }
    },
    methods:{
        getLastId(){
            if(this.tasks.length){
                return this.tasks[this.tasks.length-1].id   
            }
            else{
                return 0
            }
            
        },
        //CRIAR UMA TAREFA
        addTask(){
             if(this.name == ""){
                 alert("INSIRA UMA TAREFA VÁLIDA")
             }
            else if(!this.tasks.some(
                task => task.name === this.name
            ))
            {
            this.tasks.push({id:this.getLastId()+1,name:this.name,type:this.type})
            }
            else{
                alert("TAREFA JÁ ADICIONADA")
            
            }
        },
       
        removeTask(id){
            this.tasks = this.tasks.filter(
                (task) => task.id !== id          
            )

        },
        saveStorage(){
            localStorage.setItem("tasks",JSON.stringify(this.tasks))
        }
    },
    computed:{
        filterTypes(){
                return this.tasks.filter(
                    task => task.type == this.filter || this.filter == "todos" 
                )
            }
        }
})