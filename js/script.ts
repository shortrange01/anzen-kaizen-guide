import $ from 'jquery';
// eslint-disable-next-line import/extensions
import { readData } from './reader';
import {
    writeNextTodo,
    writeTodoCount,
    toggleTodoList,
    toggleTodoEmpty,
    removeTodo,
    addTodo,
} from './writer';

function updateAll() {
    const { count, nextTodoText } = readData();

    writeNextTodo(nextTodoText);
    writeTodoCount(count);
    toggleTodoList(count);
    toggleTodoEmpty(count);
}

$(() => {
    $('#addTodo').on('click', () => {
        addTodo();
        updateAll();
    });

    $('#todoList').on('input', '.todo:eq(0)', () => {
        updateAll();
    });

    $('#todoList').on('click', '.delete', function () {
        removeTodo(this);
        updateAll();
    });

    updateAll();
});
