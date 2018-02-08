<template>
  <div class="contact">
    <p>{{msg}}</p>
    <a @click.prevent="$router.push({name:'about'})">go关于我们</a>
    <ul>
      <img :src="info.image" :title="info.title" />
      <h1>描述：</h1>
        <p>{{info.summary}}</p>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      msg: '这里是联系我们的页面',
      info: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get('/static/info.json').then((res) => {
        this.info = res.data;
      })
    }
  }
}

</script>
