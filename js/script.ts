/* eslint-disable import/extensions */
import './mount';
import $ from 'jquery';
import { mutations } from './Store';

$(() => {
    $('#addTodo').on('click', () => {
        mutations.addTodo();
    });

    $('#todoList').on('click', '.delete', function () {
        mutations.removeTodo($('#todoList').find('.delete').index(this));
    });
});
