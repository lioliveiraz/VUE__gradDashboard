<template>
  
            <div class="g-stats-card">
                <div class="g-stats-card--content">
                    <div class="g-stats-card--square">
                        <img src="../../assets/education.svg" alt="education">               
            </div>
                <div class="flex-1">
                    <p class="text-gray-500 font-semibold">{{title}}</p>
                        <div class="flex items-baseline">
                            <h2 class="font-semibold">
{{value}}                            </h2>
                          <p class="text-green-700 text-xl">
                                <span>&#8593;</span>
                                <span class="font-bold">5</span>
                            </p>
                        </div>
                         
                    </div>
                                </div>
                                </div>
</template>

<script>
export default {
    props:{title:String, value:String}

}
</script>

<style>

</style>