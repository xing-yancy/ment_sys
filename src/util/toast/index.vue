<template>
    <transition>
    <div
        class="toast-warp"
        :class="[type,animate]"
        v-if="exist"
        >
        <div class="toast-tontent">
            {{ msg }}
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    data(){
        return {
            exist:true,
            show:true,
        }
    },
    computed: {
        animate() {
            return this.show ? 'fade-in' : 'fade-out';
        },
  },
}
</script>

<style scoped>
    .toast-warp{
        width:200px;
        height:40px;
        line-height: 40px;
        text-align:center;
        position:fixed;
        top:0px;
        left:calc(50% - 100px);
        border-radius: 10px;
        margin-top:30px;
        z-index:900;
    }
    .success{
        background:#67c23a;
    }
    .fail{
        background:#f56c6c;
    }
    .toast-tontent{
        font-weight:300;
        color:#ffff;
        letter-spacing: 4px;
    }
    @keyframes fadeIn {
        0% {
            top: -100px;
            opacity: 0;
        }
        100% {
            top: 0px;
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        100% {
            top: -100px;
            opacity: 0;
        }
        0% {
            top: 0px;
            opacity: 1;
        }
    }

    .fade-in {
        animation: fadeIn .5s forwards;
    }
    .fade-out {
        animation: fadeOut .5s forwards;
    }
</style>