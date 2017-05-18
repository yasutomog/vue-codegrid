<template>
  <div>
    <list-view
            :memos="sharedState.memos"
            @remove="remove"
            :count="privateState.count"
            :sort="privateState.sort"
    ></list-view>
    <router-link :to="{name: 'items'}">すべて見る</router-link>
  </div>
</template>

<script>
  import ListView from '../components/ListView'
  export default{
    data () {
      return {
        privateState: {
          count: 3,
          sort: 'latest'
        }
      }
    },
    computed: {
      sharedState () {
        return this.$store.state
      }
    },
    methods: {
      remove (id) {
        this.$store.commit('removeMemo', id)
      }
    },
    components: {
      ListView
    }
  }
</script>
