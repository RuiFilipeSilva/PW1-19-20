const vm = new Vue({
    el:"#intro",
    data:{
        msg : "A ESMAD é uma escola P.Porto",
        textColor:'black',
        fontSize:12,
        backgroundColor:"white",
        show:'visible'
    },
    methods:{
        changeTextColor:function(color){
            this.textColor=color
        },
        changeFontSize:function(size){
            this.fontSize = size
        },
        changeBackgroundColor:function(color){
            this.backgroundColor = color
        },
        changeShow:function(){
            if(this.show == 'visible'){
                this.show = 'hidden'
            }
            else{
                this.show = 'visible'
            }
        }
    }
})