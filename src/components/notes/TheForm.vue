<template>
  <div class="note-form__wrapper">
  <form class="note-form" @submit.prevent="onSubmit">
    <textarea placeholder="type new note"
           v-model="value"
           required>
    </textarea>
    <TagsList :items="tags"
    @onItemClick="handleClick"/>
    <button type="submit" class="btn btnPrimary">Add new note</button>
  </form>
  </div>
</template>
<script>
import tags from "@/seeders/tags";
import TagsList from "@/components/UI/TagsList";
export default {
  data(){
    return{
      value: '',
      tags: tags
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
      item.isActive = true
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