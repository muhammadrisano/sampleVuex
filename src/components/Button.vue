<template>
<button type="submit" class="btn btn-primary" @click="$emit('terserahlah')">Submit</button>
</template>
<script>
export default {
  name: 'Button',
  data () {
    return {
      coba: 'hello word'
    }
  }
}
</script>
<style scoped>

</style>
