<template>
  <div>
    <!-- Header  -->

    <header class="header-bg sans-serif">
      <div class="mw9 center pa4 pt5-ns pb5-ns ph7-l">
        <h1 class="f3 f1-m f1-l tc lh-title mv0 white oswald">Total New Hires</h1>

          <div class="city--totals pt5 pb5 oswald">
            <div class="tc white">
              <h3>Charlotte</h3>

              <h1><animated-integer :value="totalHiresClt"></animated-integer></h1>
            </div>
            <div class="tc white">
              <h3>Phoenix</h3>
              <h1><animated-integer :value="totalHiresPhx"></animated-integer></h1>
            </div>
            <div class="tc white">
              <h3>Richmond</h3>
              <h1><animated-integer :value="totalHiresRich"></animated-integer></h1>
            </div>
            <div class="tc white">
              <h3>Virgina Beach</h3>
              <h1><animated-integer :value="totalHiresVb"></animated-integer></h1>
            </div>
          </div>

        <h5 class="f6 tc ttu tracked white">Since October</h5>
      </div>
    </header>

    <!-- links -->
    <section>
      <div class="flex flex-column">
        <div v-for="location in locations" class="location aspect-ratio">

          <a :href="`${location.pageUrl}`" class="pointer link cover bg-center hide-child aspect-ratio--object">
                <img class="w-100" :src="`${location.featureImage}`">
                <div class="tc white child bg-black-70 flex justify-center items-center aspect-ratio--object">
                    <h1 class="oswald white">{{location.city}}</h1>
      			    </div>

          </a>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
import AnimatedInteger from '~/components/animatedInteger'
import axios from 'axios'
import mmclt from '~/assets/images/mm-clt.jpg'
import mmphx from '~/assets/images/mm-phx.jpg'
import mmrich from '~/assets/images/mm-rich.jpg'
import mmvb from '~/assets/images/mm-vb.jpg'

export default {
  async fetch ({env, store}) {
    await axios.get(env.baseURL + '/newhires/clt.json').then(res => {
      let cltObj = { city: 'Charlotte', newhires: res.data }
      store.dispatch('setCityData', cltObj)
    })

    await axios.get(env.baseURL + '/newhires/phx.json').then(res => {
      let phxObj = { city: 'Phoenix', newhires: res.data }
      store.dispatch('setCityData', phxObj)
    })

    await axios.get(env.baseURL + '/newhires/rich.json').then(res => {
      let richObj = { city: 'Richmond', newhires: res.data }
      store.dispatch('setCityData', richObj)
    })

    await axios.get(env.baseURL + '/newhires/vb.json').then(res => {
      let vbObj = { city: 'Virginia Beach', newhires: res.data }
      store.dispatch('setCityData', vbObj)
    })
  },
  components: {
    'animated-integer': AnimatedInteger
  },
  data () {
    return {
      clt: [],
      phx: [],
      vb: [],
      rich: [],
      locations: [
        {
          city: 'Charlotte',
          featureImage: mmclt,
          pageUrl: '/newhires/charlotte'
        },
        {
          city: 'Richmond',
          featureImage: mmrich,
          pageUrl: '/newhires/richmond'
        },
        {
          city: 'Virginia Beach',
          featureImage: mmvb,
          pageUrl: '/newhires/virginia-beach'
        },
        {
          city: 'Phoenix',
          featureImage: mmphx,
          pageUrl: '/newhires/phoenix'
        }
      ]
    }
  },
  computed: {
    totalHiresClt () {
      return this.$store.state.clt.length
    },
    totalHiresPhx () {
      return this.$store.state.phx.length
    },
    totalHiresVb () {
      return this.$store.state.vb.length
    },
    totalHiresRich () {
      return this.$store.state.rich.length
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-bg {
    background-color: #B90220;
  }

  .location {
    height: 150px;
    overflow: hidden;
  }

  .location img {
    display: block;
    vertical-align: middle;
    margin: auto;

    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .location:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }


  .oswald {
    font-family: Oswald, sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .city--totals {
    display: flex;
    flex: row wrap;
    justify-content: space-around;
  }

  .location--container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 225px;
    h1 {
      font-weight: 800;
      padding-right: 50px;
    }

  }
</style>
