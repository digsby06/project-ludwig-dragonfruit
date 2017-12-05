<template lang="html">
  <div class="page--clt vh-100">

    <header class="header-bg sans-serif">
      <div class="mw9 center pa4 pt5-ns pb4-ns ph7-l">
        <h1 class="f3 f1-m f1-l tc lh-title mv0 white oswald">National Sales Support Center New Hires</h1>
      </div>
    </header>

    <tree-chart :chartData="$store.state.clt" city="Charlotte"/>

  </div>
</template>

<script>
import axios from 'axios'
import treechart from '~/components/treechart'

export default {
  async fetch ({env, store}) {
    await axios.get(env.baseURL + '/newhires/clt.json').then(res => {
      let cltObj = { city: 'Charlotte', newhires: res.data }
      store.dispatch('setCityData', cltObj)
    })
  },
  components: {
    'tree-chart': treechart
  }
}
</script>

<style lang="scss" scoped>

.page--clt {
  background-color: #B90220;
}
</style>
