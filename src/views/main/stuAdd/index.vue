<template>
    <div id="student-add">
        <form action="#" id="add-student-form">
            <div><label for="name">姓名</label><input type="text" id="name" v-model="user.name"></div>
            <div><label for="">性别</label>
                <input type="radio" name="sex" id="male" v-model='user.sex' value="0" checked>
                <label for="male" class="sex">男</label>
                <input type="radio" name="sex" id="female" v-model="user.sex" value="1">
                <label for="female" class="sex">女</label>
            </div>
            <div><label for="email">邮箱</label><input type="email" id="email" v-model="user.email"></div>
            <div><label for="number">学号</label><input type="text" id="number" v-model="user.sNo"></div>
            <div><label for="birthYear">出生年</label><input type="text" id="birthYear" v-model="user.birth"></div>
            <div><label for="phone">手机号</label><input type="text" id="phone" v-model="user.phone"></div>
            <div><label for="address">住址</label><input type="text" id="address" v-model="user.address"></div>
            <div><label for=""></label>
                <button id="add-submit" class="btn" @click.prevent="stuAdd">提交</button>
                <input type="reset" class="btn">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                name:'',
                sex:0,
                email:'',
                sNo:'',
                birth:'',
                phone:'',
                address:'',
            },
        }
    },
    methods:{
        async stuAdd(){
            try{
                const {msg,status:type} = await this.$api.stuAdd(this.user);
                this.$toast({msg,type});

                this.user.name='';
                this.user.sex=0;
                this.user.email='';
                this.user.sNo='';
                this.user.birth='';
                this.user.phone='';
                this.user.address='';
            }catch(error){
                const {msg,status:type} = error;
                this.$toast({msg,type});
            }
            
        },
    }
}
</script>

<style>

</style>
