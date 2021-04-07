<template>
    <section class="g-dashboard--top">

  <h1>Welcome {{ getName }}</h1>

      <img src="../../assets/hi.svg" alt="hi" />
          </section>

</template>
<script>
import { mapGetters } from "vuex";

export default{
    computed:{
        ...mapGetters("auth", ["getName"]),

    }

}
</script>
