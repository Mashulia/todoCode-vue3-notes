<template>
  <div class="md-body">
    <Form @onSubmit="handleSubmit"/>
    <List :items="notes"
    @onRemove="handleRemove"/>
    <TagsList/>
  </div>
</template>
<script>
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
      notes: notes
    }
  },
  mounted() {
    this.getNotes()
  },
  methods:{
    handleSubmit(title){
      const note = {
        title,
        tags: []
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
