<template>
    <div id="student-list">
        <stu-tab></stu-tab>
        <transition>
            <stu-model v-if='show'></stu-model>
        </transition>
        <turn-page
        :totalPage='totalPage' 
        :nowPage="nowPage"
        @current-page="cpage"
        ></turn-page>
    </div>
</template>

<script>
import stuTab from '@/components/stuTab';
import stuModel from '@/components/stuModel';
import turnPage from '@/components/turnPage';
import { mapActions, mapState } from 'vuex';

export default {
    components:{
        stuTab,
        stuModel,
        turnPage,
    },
    methods:{
        ...mapActions(['getStuList']),
        cpage(i){
            this.getStuList(i);
        }
    },
    created(){
        this.getStuList(1);
    },
    computed:{
        ...mapState(['show','nowPage','totalPage']),
        
    }
}
</script>

<style>
    .v-enter,.v-leave-to{
        top:-100%;
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition:all .5s;
    }
    .v-leave,.v-enter-to{
        top:0;
        opacity: 1;
    }
</style>
