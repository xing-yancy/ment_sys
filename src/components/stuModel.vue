<template>
  <div class="modal">
      <div class="mask" @click='setShowModel(false)'></div>
    <div class="modal-content">
        <h2>编辑表单</h2>
        <form action="#" id="edit-student-form">
            <div>
                <label for="edit-name">姓名</label>
                <input type="text" id="edit-name" name="name" 
                :value="stu.name"
                @input="edit('name',$event.target.value)"
                >
            </div>
            <div>
                <label for="">性别</label>
                <input type="radio" name="sex" id="edit-male" value='0' 
                :checked="stu.sex == '0'"
                @change="edit('sex',0)"
                >
                <label for="edit-male" class="sex">男</label>
                <input type="radio" name="sex" id="edit-female" value="1"
                :checked="stu.sex == '1'"
                @change="edit('sex',1)"
                >
                <label for="edit-female" class="sex">女</label>
            </div>
            <div>
                <label for="edit-email">邮箱</label>
                <input type="email" id="edit-email" name="email" 
                :value="stu.email"
                @input="edit('email',$event.target.value)"
                >
            </div>
            <div>
                <label for="edit-number">学号</label>
                <input type="text" id="edit-number" name="sNo" readonly 
                :value="stu.sNo"
                >
            </div>
            <div>
                <label for="edit-birthYear">出生年</label>
                <input type="text" id="edit-birthYear" name="birth" 
                :value="stu.birth"
                @input="edit('birth',$event.target.value)"
                >
            </div>
            <div>
                <label for="edit-phone">手机号</label>
                <input type="text" id="edit-phone" name="phone" 
                :value="stu.phone"
                @input="edit('phone',$event.target.phone)"
                >
            </div>
            <div>
                <label for="edit-address">住址</label>
                <input type="text" id="edit-address" name="address" 
                :value="stu.address"
                @input="edit('address',$event.target.value)"
                >
            </div>
            <div>
                <label for=""></label>
                <button id="edit-submit" class="btn" @click.prevent="editStu">提交</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'
export default {
    data(){
        return{
            result:{},
        }
    },
    methods:{
        ...mapMutations(['setShowModel']),
        edit(key,value){
            this.result[key]=value;
        },
        async editStu(){
            const student = { ...this.stu,...this.result}
            try{
                const { msg,status:type}= await this.$api.model(student);
                this.setShowModel(false);
                this.$toast({msg,type});
                Object.assign(this.stu,this.result);

            }catch(error){
                const {msg,status:type} = error;
                this.$toast({msg,type});
            }
        }
    },
    computed:{
        ...mapState(['stu']),
    }
}
</script>

<style scoped>

</style>