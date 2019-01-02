<template>
  <div class='filter_template'>
    <span v-if='item'>{{item[obj["title"]]}}</span>
  </div>
</template>

<script>
export default {
  props: {
    item:{
      type: Object,
      default: function() {
        return {}
      }
    },
    obj:{
      type: Object,
      default: function() {
        return {
          title:'name'
        }
      }
    }
  }
}
</script>

<style scoped>
@import './filterTemplate.css';
</style>