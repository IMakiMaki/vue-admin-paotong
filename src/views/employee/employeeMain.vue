<template>
    <div class="employee-main">
        <customer-service></customer-service>
    </div>
</template>

<script>
    import customerService from './customerService.vue'
    export default {
        components: {
            customerService
        }
    }
</script>

<style lang="scss" scoped>
    .employee-main{

    }
</style>