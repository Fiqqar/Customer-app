<template>
    <div class="edit container">
        <Alert v-if="alert" v-bind:message="alert"/>
        <h1 class="page-header">Edit Customer</h1>
        <form></form>
    </div>
</template>

<script>
export default {
    name: "editComp"
}
</script>