<template>
  <div class="about">
    <p>{{msg}}</p>
    <a @click.prevent="$router.push({name:'contact'})">go联系我们</a>
    <ul>
      <li v-for="item in list">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      msg: '这里是关于我们的页面',
      list: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get('/static/list.json').then((res) => {
        this.list=res.data.books;
      })
    }
  }
}
</script>
