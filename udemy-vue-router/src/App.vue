<template>
  <div style="width:700px; margin: auto; padding-top: 30px;">
    <router-view name="header"></router-view>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    
        <hr>
    
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s
}

</style>