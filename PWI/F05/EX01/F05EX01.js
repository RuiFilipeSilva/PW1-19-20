const vm = new Vue({
    el : "#app",
    data:{
        msg:"Programação Web I"
    },
    methods:{
        showMessage(newmsg){
            alert(newmsg)
    },
    showMessage2(event){
        console.log(event.target.tagName)
        console.log(event.type)
},
    bubbling(){
        alert("bubbling")
    }

    }
})