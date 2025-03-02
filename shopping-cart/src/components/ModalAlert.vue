
<script setup>
    function getNumber(n){
        if(!n) {return ' '}
        return n > 9 ? '9+' : n
    }

    const { value } = this.props
</script>

<template>
    <span class="modal">
        {{ this.getNumber(value) }}
    </span>
</template>

<style scoped>
    .modal{
        background-color: #E9725A;
        border-radius: 15px;
        color: #fff;
        padding: 2px 10px; 
        font-size: 0.9rem;
        width: 20px;
    }
</style>