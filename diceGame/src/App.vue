<template>
  <div id="app">
    <div class="wrapper clearfix">
      <Home></Home>
      <Players
        v-bind:scorePlayer="scorePlayer"
        v-bind:activePlayer="activePlayer"
        v-bind:currentScore="currentScore"
        v-bind:isWinner="isWinner"
      ></Players>

      <Controls
        v-on:handleNewGame="handleNewGame"
        v-on:handlerollDice="handlerollDice"
        v-on:handleHoldScore="handleHoldScore"
        v-bind:finalScore="finalScore"
        v-on:handleChangeFinalScore="handleChangeFinalScore"
        v-bind:isPlaying="isPlaying"
      ></Controls>

      <Dice
        v-bind:dices="dices"
      ></Dice>

      <PopupRule
        v-bind:isOpenPopup="isOpenPopup"
        v-on:handleConfirm="handleConfirm"
      ></PopupRule>
  </div>
  </div>
</template>

<script>
import Players from './components/Players';
import Controls from './components/Controls';
import Dice from './components/Dices';
import PopupRule from './components/PopupRule';
import Home from './components/Home/Home'

export default {
  name: 'app',
  components: {
    Players,
    Controls,
    Dice,
    PopupRule,
    Home
  },
  data () {
    return {
      isPlaying: false,
      isOpenPopup: false,
      activePlayer: 0,
      scorePlayer: [0 , 0],
      dices: [2, 6],
      currentScore: 0,
      finalScore: 10
    }
  },
  computed: {
    isWinner(){
      let {scorePlayer, finalScore} = this;
      if(scorePlayer[0] >= finalScore || scorePlayer[1] >= finalScore){
        //dung cuoc choi
        this.isPlaying = false;
        return true;
      }
      return false;
    }
  },
  methods: {
    nextPlayer(){
      //đổi lượt chơi
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
      //Reset điểm về 0
      this.currentScore = 0;
    },
    handleConfirm(){
      //console.log('handleConfirm App.vue');
      this.isOpenPopup = false;
      this.isPlaying = true;
      this.activePlayer = 0;
      this.scorePlayer = [0,0];
      this.currentScore = 0;
      this.dices = [1,1];
    },
    handleNewGame(data){
      //console.log('handleNewGame');
      this.isOpenPopup = true;
    },
    handlerollDice(){
      //console.log('handlerollDice app.vue');
      if(this.isPlaying){
        var dice1 = Math.floor(Math.random() * 6 ) +1;
        var dice2 = Math.floor(Math.random() * 6 ) +1;
        this.dices = [dice1, dice2];

        if(dice1 === 1 || dice2 === 1){
          //đổi lượt chơi
          //Reset điểm về 0
          var activePlayer = this.activePlayer;
          setTimeout(function(){
            alert(`Nguoi choi Player ${activePlayer + 1} da quay trung so 1. Rat tiec`);
          }, 10);
          this.nextPlayer();

        }else{
          // Cộng dồn điểm vào người chơi
          this.currentScore = this.currentScore + dice1 + dice2;
        }
        console.log(dice1, dice2, this.dices);
      }else {
        alert('Vui long nhan vao nut New Game !')
      }
    },
    handleHoldScore(){
      if(this.isPlaying){
        let {scorePlayer, activePlayer, currentScore} = this;
        let oldScore = scorePlayer[activePlayer];
        let cloneScorePlayer = [...scorePlayer];
           cloneScorePlayer[activePlayer] = oldScore + currentScore;
        this.scorePlayer = cloneScorePlayer;

        //cách 2
        //this.$set(this.scorePlayer, activePlayer, oldScore + currentScore);

        //Neu chua co ai win
        if(!this.isWinner){
          this.nextPlayer();
        }
        //console.log(cloneScorePlayer);
      }else {
        alert('Vui long nhan vao nut New Game !')
      }
    },
    handleChangeFinalScore(e){
      //console.log(parseInt(e.target.value));
      var number = parseInt(e.target.value);
      if(isNaN(number)){
        this.finalScore = ''
      }else {
        this.finalScore = number;
      }

      console.log(this.finalScore);
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  /**********************************************
  *** GENERAL
  **********************************************/

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

  }

  .clearfix::after {
      content: "";
      display: table;
      clear: both;
  }

  body {
      background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('./assets/back.jpg');
      background-size: cover;
      background-position: center;
      font-family: Lato;
      font-weight: 300;
      position: relative;
      height: 100vh;
      color: #555;
  }

  .wrapper {
      width: 1000px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
      overflow: hidden;
  }
</style>
