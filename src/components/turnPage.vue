<template>
   <div class="turn-page" v-if="totalPage > 1">
        <div
        :class="pagePrev"
        @click="turnPage('prev')"
        >&lt;</div>
        <template v-if="totalPage<=7">
            <div
            
            v-for='i in totalPage'
            :class='{ active : i == nowPage }'
            :key='i'
            @click="turnPage(i)"
            >
            {{ i }}
            </div>
        </template>
        <template v-else>
            <template v-if="nowPage <= 4">
                <div
                v-for=" i in 6"
                :key="i"
                :class="{ active : i == nowPage }"
                @click="turnPage(i)"
                > {{ i }} </div>
            </template>
            <template v-if="nowPage > 4">
                <div @click="turnPage(1)">1</div>
                <div @click="turnPage(nowPage-5 > 1 ? nowPage-5 : 1)">...</div>
            </template>
            <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
                <div
                v-for="i in 5"
                :key="nowPage - 3 + i"
                :class="{ active : i == 3 }"
                @click="turnPage( nowPage - 3 + i)"
                > {{ nowPage- 3 + i }} </div>
            </template>
            <template v-if="nowPage <= totalPage - 4">
                <div
                @click="turnPage(nowPage + 5 > totalPage ? totalPage : nowPage+5)"
                >...</div>
                <div
                :class="{ active : nowPage == totalPage }"
                @click="turnPage(totalPage)"
                >{{ totalPage }}</div>
            </template>
            <template v-if="nowPage > totalPage - 4">
                <div
                v-for="i in 6"
                :key="totalPage - 6 + i"
                :class="{ active : nowPage == totalPage - 6 + i}"
                @click="turnPage( totalPage - 6 + i )"
                >{{ totalPage - 6 + i }}</div>
            </template>
        </template>
        <div
        :class="pageNext"
        @click="turnPage('next')"
        >&gt;</div>
    </div>
</template>

<script>
export default {
    props:{
        nowPage:{
            type:Number,
            default:1,
        },
        totalPage:{
            type:Number,
            default:100,
        }
    },
    methods:{
        turnPage(page){
            let np=0;
            if(page == 'prev'){
                if(this.nowPage > 1){
                    np = this.nowPage - 1;
                }
            }else if(page == 'next'){
                if(this.nowPage < this.totalPage){
                    np = this.nowPage + 1;
                }
            }else{
                np = page;
            }
            this.$emit('current-page',np);
        }
        
    },
    computed:{
        pagePrev(){
            if(this.nowPage == 1){
                return 'noWarp';
            }
            return '';
        },
        pageNext(){
            if(this.nowPage == this.totalPage){
                return 'noWarp';
            }
            return '';
        },
    }
}
</script>

<style scoped>
    .turn-page{
        display:flex;
        justify-content: center;
        user-select:none;
    }
    .turn-page > div{
        padding: 0 4px;
        font-size:16px;
        min-width:35.5px;
        height:28px;
        line-height:28px;
        cursor:pointer;
        box-sizing:border-box;
        text-align:center;
        margin:0;
    }
    .turn-page > div:hover{
        color: #409eff;
    }
    .turn-page >div.active{
        color:#409eff;
        cursor:default;
    }
    .noWarp{
        cursor:not-allowed!important;
        color:rgb(73, 68, 68)!important;
    }
    .noWarp:hover{
        color:rgb(73, 68, 68)!important;
    }
</style>