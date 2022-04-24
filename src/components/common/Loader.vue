<template>
    <div class="wrapper">
        <div class="loader-wrapper">
            <svg viewBox="0 0 256 256" class="loader">
                <path fill="currentColor" d="M236.2 51.7v48a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h19l-13.5-13.4a75.9 75.9 0 1 0 0 107.4a12.2 12.2 0 0 1 17 0a12 12 0 0 1 0 17a100 100 0 1 1 0-141.4l13.5 13.4v-19a12 12 0 1 1 24 0Z">
                </path>
            </svg>
        </div>
    </div >
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"LoaderImage"
})
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";

.wrapper{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    .loader-wrapper{
        width: 50px;
        height: 50px;
        background: transparent;
        
        .loader{
            height: 100%;
            width: 100%;
            animation: rotate 1s linear infinite ;
            color: $button-color;
        }
    }
}
@keyframes rotate {
    to{
        transform: rotate(360deg);
    }
}
</style>

