<template>
    <Resize id="app" class="app-layout">
    <div class="container">
        <div class="main">
            <div class="addTask">
                <input class="task-input"  v-model="newTask">
                <button @click="addTask">Добавить</button>
            </div>

            <ul>
                <li v-for="task in tasks" @click="toggleComplete(task)" :class="{'complete': task.complete}">
                    {{ task.description }}
                </li>
            </ul>
            </div>
    </div>
    </Resize>
</template>

<script>
    import Resize from '@/components/common/Resize';

    export default {
      props: ['task','store'],
        data() {
            return{
                newTask: '',
                tasks: this.$store.getters.doneTodos
            }
        },
        name: 'app',
        components: {
            Resize
        },
        methods: {
            showTask() {
                this.tasks =  this.$store.getters.doneTodos
                return console.log(this.$store.getters.doneTodos)
            },
            addTask() {
                this.$store.dispatch('ADDTASK', this.newTask)
                this.newTask = ''
            },
            toggleComplete(task) {
                this.$store.dispatch('TOGGLECOMPLITE', task);
                console.log(this.$store.state.task.complete);
            }
        }
    }
</script>

<style scope>
    .container {
        width: 920px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (max-width: 920px) {
      .container {
        width: 100%;
      }
    }
    .main {
        margin-top: 50px;
        text-align: center;
    }
    .task-input {
        padding: 0px 10px;
        width: 400px;
        height: 36px;
        border: 1px solid #ccc;
        font-size: 1.3em;
    }
    ul {

    }
    li {
        font-size: 1.3em;
        border-bottom: 1px solid #ccc;
        padding: 10px 0px;
    }
    button {
        font-size: 1em;
        color: #fff;
        background-color: #989696;
        border: 0;
        padding: 0px 10px;
        height: 36px;
        transition: background-color .5s ease;
    }
    button:hover {
        cursor: pointer;
        background-color: #ccc;
        transition: background-color .5s ease;
    }
    .addTask {
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .complete{
      color: #ccc;
      text-decoration: line-through;
    }
</style>

