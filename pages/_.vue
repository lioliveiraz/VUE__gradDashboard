<template>
  <div class="g-login-box">
   <h1>Page not found</h1>
  </div>
</template>

<script>
export default{
    beforeMount(){
        window.onNuxtReady(() => { window.$nuxt.$router.push('/') })
    }
}
</script>