import $ from 'jquery';

export const readData = () => {
    const count = $('.todo').length;
    const next = $('.todo input').first();
    const nextTodoText: any = count ? next.val() : '(未登録)';

    return { count, nextTodoText };
};