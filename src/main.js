// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

Vue.component('list-item', {
  props: {
    memo: Object
  },
  template: `
    <div class="list-item">
      <div>
        <span>id</span>：
        <span>{{memo.id}}</span>
      </div>
      <div>
        <span>text</span>：
        <span>{{memo.text}}</span>
      </div>
      <div>
        <span>date</span>：
        <span>{{memo.date}}</span>
      </div>
      <div>
        <span>tags</span>：
        <span>
          <span v-for="tag in memo.tags">{{tag}}</span>
        </span>
      </div>
      <div>
        <button @click="remove(memo.id)">削除</button>
      </div>
    </div>
  `,
  methods: {
    remove (id) {
      // this.$parent(ListViewコンポーネント)に
      // 'remove' イベントをトリガーする
      this.$parent.$emit('remove', id)
    }
  }
})

Vue.component('editor-view', {
  template: `
    <div class="editor-view">
      <div>
        <label>内容：</label>
        <input v-model="input.text" placeholder="メモのタイトル">
      </div>
      <div>
        <label>日付：</label>
        <input type="date" v-model="input.date">
      </div>
      <div>
        <label>タグ：</label>
        <input v-model="input.tags" placeholder="空白区切りで指定">
      </div>
      <div>
        <button @click="save">保存</button>
      </div>
    </div>
  `,
  data () {
    return {
      input: {
        text: '',
        date: '',
        tags: ''
      }
    }
  },
  computed: {
    tagsArr () {
      // input.tags の文字列を空白で区切って配列に変換する
      return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
    }
  },
  methods: {
    save () {
      // this.input のクローンを生成する
      const data = Object.assign({}, this.input, {tags: this.tagsArr})
      // 'add'イベントを自身にトリガーする
      this.$emit('add', data)
    }
  }
})

Vue.component('list-view', {
  template: `
    <div class="list-view">
      <div v-if="memos && memos.length !== 0">
        <list-item
          v-for="memo in memos"
          :memo="memo">
        </list-item>
      </div>
      <div v-else>
        表示できるメモがありません。
      </div>
    </div>
  `,
  props: {
    memos: Array
  }
})

const vm = new Vue({
  data () {
    return {
      memos: []
    }
  },
  template: `
    <div>
      <editor-view @add="add"></editor-view>
      <list-view :memos="memos" @remove="remove"></list-view>
    </div>
  `,
  methods: {
    add (newMemo) {
      newMemo.id = this.nextId
      this.memos.push(newMemo)
    },
    remove (id) {
      // 該当する id を持つ要素の index を取得する
      const index = this.memos.findIndex((memo) => {
        return memo.id === id
      })
      // this.memos から index にある要素を削除する
      this.memos.splice(index, 1)
    }
  },
  computed: {
    nextId () {
      // this.memos の中で一番大きい id + 1 を返す
      return this.memos.reduce(
          (id, memo) => {
            return id < memo.id ? memo.id : id
          }, 0
      ) + 1
    }
  }
})

vm.$mount('#app')
