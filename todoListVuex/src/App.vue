<template>
  <div id="app">
    <b-container>
      <CompTitle></CompTitle>

      <b-row>
        <CompControl></CompControl>

        <CompForm></CompForm>
      </b-row>

      <TodoListTable></TodoListTable>
    </b-container>
  </div>
</template>

<script>
import CompTitle from './components/CompTitle';
import CompControl from './components/CompControl';
import CompForm from './components/CompForm';
import TodoListTable from './components/TodoListTable';

import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    CompTitle,
    CompControl,
    CompForm,
    TodoListTable
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    padding: 50px 0 0;
  }
  .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
  }
  .table {
    margin-bottom: 0;
  }
  .container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  span.badge-medium {
    padding: 11px 10px;
    margin: 0px 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
  }
  button:focus,
  input:focus,
  .form-control:focus  {
    box-shadow: none !important;
  }

  @media (max-width: 992px) {
    .add-task {
      margin-top: 50px;
    }
  }

</style>
