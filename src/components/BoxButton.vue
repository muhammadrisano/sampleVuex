<template>
<div><p>ini adalah tombol</p>
<input type="text" @keyup="$emit('inputData', $event.target.value)">
<Button @terserahlah="$emit('terserah', coba)"/>
</div>
</template>
<script>

import Button from '../components/Button'
export default {
  name: 'BoxButton',
  components: {
    Button
  },
  data () {
    return {
      coba: 'hello word'
    }
  }
}
</script>
<style scoped>

</style>
