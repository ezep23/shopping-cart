
<template>
    <button class="button">
        {{ ...this.props  }}
    </button>
</template>

<style scoped>

    .button{
        background-color: #0A283E;
        color: #fff;
        padding: 15px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

</style>