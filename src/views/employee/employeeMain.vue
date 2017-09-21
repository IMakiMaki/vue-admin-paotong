<template>
    <div class="employee-main">
        <customer-service></customer-service>
        <dun-staff></dun-staff>
        <auditing-staff></auditing-staff>
    </div>
</template>

<script>
    import customerService from './customerService.vue'
    import dunStaff from './dunStaff.vue'
    import auditingStaff from './auditingStaff.vue'
    export default {
        components: {
            customerService,
            dunStaff,
            auditingStaff
        }
    }
</script>

<style lang="scss" scoped>
    .employee-main{

    }
</style>