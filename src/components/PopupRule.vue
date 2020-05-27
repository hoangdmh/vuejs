<template>
  <div class="wrapper-popup" v-bind:class="getClassPopup">
    <div class="rule">
      <h3>Luật chơi</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ipsum dolorum saepe nostrum quas autem eius provident magni minus nobis, eligendi voluptatem iusto aliquam velit inventore vero adipisci illum maxime.</p>
      <button
        v-on:click="confirm"
      >Gửi</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    isOpenPopup: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {}
  },
  methods: {
    confirm(){
      // truyen event ra app.vue
      console.log('confirm Popup');
      this.$emit('handleConfirm')
    }
  },
  computed: {
    getClassPopup:function(){
      return {
        'opent-popup': this.isOpenPopup
      }
    }
  }
}
</script>

<style>
  .wrapper-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
   .wrapper-popup.opent-popup {
     opacity: 1;
     visibility: visible;
   }
  .rule {
    width: 350px;
    padding: 20px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(1.2);
    transition: all 0.3s ease;
  }
  .opent-popup .rule {
    transform: translate(-50%,-50%) scale(1);
  }
  .rule h3{
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
  .rule button {
    width: 100px;
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #222;
    border: 1px solid #222;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .rule button:hover {
    background-color: #fff;
    color: #222;
  }
</style>
