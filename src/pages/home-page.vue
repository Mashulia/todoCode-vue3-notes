<template>
  <div class="md-body">
    <Form @onSubmit="handleSubmit"/>
    <List :items="notes"  @onRemove="handleRemove"/>
  </div>
</template>
<script>
import tags from "@/seeders/tags";
import Form from '@/components/notes/TheForm'
import List from '@/components/notes/TheList'
import notes from "@/seeders/notes";

export default {
  components: {
    Form,
    List
  },

  data() {
    return {
      notes: notes,
      tags: tags
    }
  },
  mounted() {
    this.getNotes()
  },
  methods:{
    handleSubmit(title){
      const activeTags = this.tags.filter(element => element.isActive === true)
      activeTags.forEach(element=>{
        element.isActive = false
      })
      const note = {
        title: title,
        tags: activeTags
      }
      this.notes.push(note)
    },
    handleRemove(index){
      this.notes.splice(index, 1)
    },
    getNotes(){
      const localNotes = localStorage.getItem('notes');
      if (localNotes){
        this.notes = JSON.parse(localNotes)
      }
    },
  },
  watch:{
    notes:{
      handler(updatedList){
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  }
}
</script>
