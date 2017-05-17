<template>
  <div>
    <editor-view @add="add"></editor-view>
  </div>
</template>

<script>
  import EditorView from '../components/EditorView'
  export default{
    methods: {
      add (data) {
        this.$emit('add', data)
        this.$router.push({
          name: 'items'
        })
        // 追加処理のあとに`/items`にナビゲーションする
      }
    },
    components: {
      EditorView
    }
  }
</script>
