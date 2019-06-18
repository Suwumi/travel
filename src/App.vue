<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App'
}
</script>

<style>

</style>
