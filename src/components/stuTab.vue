<template>
    <table>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>邮箱</th>
                <th>年龄</th>
                <th>手机号</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr v-for='list of list' :key='list.id'>
                <td> {{ list.sNo }} </td>
                <td> {{ list.name }} </td>
                <td> {{list.sex ==1 ? '女' : '男' }} </td>
                <td> {{ list.email}} </td>
                <td> {{ new Date().getFullYear()-list.birth}} </td>
                <td> {{ list.phone}} </td>
                <td> {{ list.address}} </td>
                <td>
                    <button class="btn edit" @click='edit(list)'>编辑</button>
                    <button class="btn remove" @click='del(list.sNo)'>删除</button>
                </td>
            </tr>
            
        </tbody>
    </table>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    computed:{
        ...mapState(['list']),
    },
    methods:{
        ...mapMutations(['setShowModel','setStuModel']),
        ...mapActions(['delStu']),
        edit(list){
            this.setStuModel(list);
            this.setShowModel(true);
        },
        del(sNo){
            // console.log(sNo)
            const fig = window.confirm(`确定要删除学号为${sNo}的信息吗？`);
            if(fig){
                this.delStu(sNo);
            }
        }
    }   
}
</script>

<style>

</style>