import Vue from 'vue';
import NextTodo from './NextTodo.vue';
import TodoCount from './TodoCount.vue';
import TodoEmpty from './TodoEmpty.vue';
import TodoList from './TodoList.vue';

new Vue(NextTodo).$mount('#nextTodo');
new Vue(TodoCount).$mount('#todoCount');
new Vue(TodoEmpty).$mount('#todoEmpty');
new Vue(TodoList).$mount('#todoList');
