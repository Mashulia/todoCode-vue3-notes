<template>
  <div class="note-form__wrapper">
  <form class="note-form" @submit.prevent="onSubmit">
    <textarea placeholder="type new note"
           v-model="value"
           required>
    </textarea>
    <TagsList :items="tags"
              isPreview
    @onItemClick="handleClick"/>
    <button type="submit" class="btn btnPrimary">Add new note</button>
  </form>
  </div>
</template>
<script>
import TagsList from "@/components/UI/TagsList";
export default {
  data(){
    return{
      value: '',
      tags: ['home', 'work', 'travel']
    }
  },
components:{
  TagsList
},
  methods:{
    onSubmit(){
      this.$emit('onSubmit', this.value)
      this.value = ""
    },
    handleClick(item){
      console.log(item)
    }
  }
}
</script>
<style lang="scss">
.note-form{
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea{
    margin: 0;
  }
}
.note-form__wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>