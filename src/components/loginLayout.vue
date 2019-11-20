<template> 
    <v-container>
            <v-card> 
                <v-card-title> 
                    <span class="headline">Login Pengguna</span> 
                </v-card-title>
                <div class="form">
                <v-card-text> 
                    <v-container> 
                        <v-row>
                            <v-col cols="12"> 
                                <v-text-field label="Email" v-model="form.email"></v-text-field>
                            </v-col>
                            <v-col cols="12"> 
                                <v-text-field label="Password" v-model="form.password" type="password"></v-text-field> 
                            </v-col> 
                        </v-row> 
                    </v-container>
                    <small>*indicates required field</small> 
                </v-card-text> 
                <v-card-actions> 
                    <v-spacer></v-spacer> 
                    <v-btn @click="login()" block color="primary" class="elevation-0" height=40>LOGIN</v-btn>
                </v-card-actions>
                </div>
            </v-card>
            <v-snackbar 
            v-model="snackbar"
            :color="color" 
            :multi-line="true" 
            :timeout="3000"
             > 
            {{ text }} 
            <v-btn 
                dark 
                text 
                @click="snackbar = false" 
            > 
                Close 
            </v-btn> 
        </v-snackbar>  
    </v-container> 
</template> 
<script>
export default {
    data(){
        return {
            form : {
                email: null, 
                password: null,
            },
            user : new FormData,
        }
    },
    methods:{
        login(){
            var url = this.$apiUrl + '/auth'
            this.user = new FormData()
            this.user.append('email',this.form.email);
            this.user.append('password',this.form.password);
            this.$http.post(url,this.user).then(response =>{
                if(response.data.token){
                    localStorage.setItem("token" , response.data.token)
                this.$router.push({ name : "Home"})
                }else{
                    alert('gagal login')
                }
            })
        }
    }
}
</script>