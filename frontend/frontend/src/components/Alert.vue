<template>
    <div class="alert alert-warning alert-dismissible" role="alert">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {{ message }}
    </div>
</template>

<script>
export default {
    name: "Alert",
    props: ['message']
}
</script>