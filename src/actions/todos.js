// criando a primeira ação
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text,
    }
}
