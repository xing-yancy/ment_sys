<template>
    <div>
        <form action="#" id="login">
        <h2>登录
            <router-link to='/logon'>注册</router-link>
        </h2>
        <div>
            <label for="account">
                账号:
            </label>
            <input type="text" v-model="account">
        </div>
        <div>
            <label for="password">密码:</label>
            <input type="password" v-model="password">
        </div>
        <div>
            <label for=""></label>
            <input class="btn" type="button" @click='login' value="提交" id="submit-btn">
            <input class="btn" type="button" @click='rest' value="重置">
        </div>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            account:'',
            password:'',
        }
    },
    methods:{
        rest(){
            this.account='';
            this.password='';
        },
        async login(){
            if(this.account && this.password){
                try{
                    const {msg,status:type}=await this.$api.login(`account=${this.account}&password=${this.password}`);
                    this.$toast({msg,type});
                    this.cookie.setCookie('username',this.account);
                    this.$router.push('/main'); 
                } catch(error){
                    const {msg,status:type} = error;
                    this.$toast({msg,type});
                }
            }
        }
    },
    created(){
        this.cookie.setCookie('username','',-1)
    }
}
</script>

<style scoped src='@/assets/login.css'>

</style>
