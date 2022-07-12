<template>
  <div class="tags-list">
    <div class="tag-item"
         v-for="item in items"
         :key="item"
         :class="{isPreview: isPreview}"
         @click="onItemClick(item)">
        <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default{
  props:{
    items:{
      type: Array,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    onItemClick(item){
      this.$emit('onItemClick', item)
    }
  }
}
</script>
<style lang="scss">
.tags-list{
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item{
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 22px;
  user-select: none;
  cursor:pointer;
  &.isActive{
    background-color: #444ce0;
    color: #ffffff;
  }
  &.isPreview{
    padding: 0;
    color: #444ce0;
    cursor: default;
    &::before{
      content: '#';
    }
  }
  &:last-child{
    margin-right: 0;
  }
}
</style>