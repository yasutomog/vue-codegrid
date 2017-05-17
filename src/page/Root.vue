<template>
  <div>
    <list-view :memos="memos" @remove="remove" :count="count" :sort="sort"></list-view>
    <router-link :to="{name: 'items'}">すべて見る</router-link>
  </div>
</template>

<script>
  import ListView from '../components/ListView'
  export default{
    data () {
      return {
        count: 3,
        sort: 'latest'
      }
    },
    props: {
      memos: Array
    },
    methods: {
      remove (id) {
        this.$emit('remove', id)
      }
    },
    components: {
      ListView
    }
  }
</script>
