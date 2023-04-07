import styles from './WithoutKobalte.module.css';
import { For, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';

export interface TodoItem {
    text: string;
    id: number;
}

export interface TodoStore {
    items: TodoItem[];
    counter: number;
}

const initialStore: TodoStore = {
    items: [],
    counter: 3,
};

const WithoutKobalte = () => {
    const [todos, setTodos] = createStore(initialStore);

    onMount(() => {
        setTodos('items', [
            { text: 'go do something productive', id: 2 },
            { text: 'do another something that is productive', id: 1 },
        ]);
    });

    let input: any;
    const addTodoItem = (input: any) => {
        const title = input.value;
        if (!title.trim()) return;
        setTodos({
            items: [{ text: title, id: todos.counter }, ...todos.items],
            counter: todos.counter + 1,
        });
        input.value = '';
    };

    const removeTodoItem = (index: number) => {
        setTodos('items', (t) => t.filter((item) => item.id !== index));
    };

    return (
        <>
            <div class={styles.container}>
                <input
                    type="text"
                    ref={input}
                    placeholder="What do you have to do today?"
                    name="todo"
                ></input>
                <button
                    onClick={() => {
                        addTodoItem(input);
                    }}
                >
                    Add Todo
                </button>
                <ul class={styles.todoList}>
                    <For each={todos.items}>
                        {(todo) => (
                            <li>
                                <div class={styles.todoItem}>
                                    {todo.text}
                                    <i
                                        class="fa fa-minus-circle"
                                        onClick={() => {
                                            removeTodoItem(todo.id);
                                        }}
                                    ></i>
                                </div>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </>
    );
};
export default WithoutKobalte;
