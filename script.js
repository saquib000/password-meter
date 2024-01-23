var app = new Vue(
    {
        el: '#app',
        data : {
            p_strength : "weak",
            password_field : "",
            lowerCheck: {
                color : "red"
            },
            upperCheck: {
                color : "red"
            },
            numberCheck: {
                color : "red"
            },
            specialCheck: {
                color : "red"
            }
        },
        watch  : {
            password_field() {
                this.lowerCase()
                this.upperCase()
                this.number()
                this.special()
            }
        },
        methods:{
            strength(){
                if (this.lowerCheck['color']=='green' && 
                    this.upperCheck['color']=='green' && 
                    this.numberCheck['color']=='green' &&
                    this.specialCheck['color']=='green')
                {
                    this.p_strength = "Strong"
                } else {
                    this.p_strength = "Weak"
                }
            },
            lowerCase(){
                if (this.password_field.search(/[a-z]/) != -1){
                    this.lowerCheck['color']='green'
                    this.strength()
                } else {
                    this.lowerCheck['color']='red'
                }
            },
            upperCase(){
                if (this.password_field.search(/[A-Z]/) != -1){
                    this.upperCheck['color']='green'
                    this.strength()
                } else {
                    this.upperCheck['color']='red'
                }
            },
            number(){
                if (this.password_field.search(/[0-9]/) != -1){
                    this.numberCheck['color']='green'
                    this.strength()
                } else {
                    this.numberCheck['color']='red'
                }
            },
            special(){
                if (this.password_field.search(/[!@#$%^&*()]/) != -1){
                    this.specialCheck['color']='green'
                    this.strength()
                }else {
                    this.specialCheck['color']='red'
                }
            }
        },
    }
)