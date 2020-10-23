<template>
    <div>
        <form action="#" id="register">
            <h2>注册
                <router-link to='/login'>登录</router-link>
            </h2>
            <div>
                <label for="username">
                    用户名:
                </label>
                <input type="text" v-model="username" name="username">
            </div>
            <div>
                <label for="account">
                    账号:
                </label>
                <input type="text" v-model="account" name="account">
            </div>
            <div>
                <label for="password">密码:</label>
                <input type="password" v-model="password" name="password">
            </div>
            <div>
                <label for="rePassword">确认密码:</label>
                <input type="password" v-model="rePassword" name="rePassword">
            </div>
            <div>
                <label for=""></label>
                <input class="btn" type="button" @click='logon' value="注册" id="register-btn">
                <input class="btn" type="button" @click='reset' value="重置">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            account:'',
            password:'',
            rePassword:'',
        }
    },
    methods:{
        reset(){
            this.username='';
            this.account='';
            this.password='';
            this.rePassword='';
        },
        async logon(){
            if(this.username && this.account && this.password && this.rePassword){
                if(this.password === this.rePassword){
                    try{
                        const {msg,status:type}=await this.$api.logon(`account=${this.account}&username=${this.username}&password=${this.password}&rePassword=${this.rePassword}`);
                        this.$toast({msg,type});
                        this.$router.push('/login');
                    } catch(error){
                        const {msg,status:type} = error;
                        this.$toast({msg,type});
                    }
                }
            }
        }
    }
}

</script>
<style scoped src='@/assets/login.css'>

</style>