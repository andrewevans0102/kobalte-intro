import styles from './WithKobalte.module.css';
import { For, createSignal, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Button } from '@kobalte/core';
import { TextField } from '@kobalte/core';

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

const WithKobalte = () => {
    const [todos, setTodos] = createStore(initialStore);

    onMount(() => {
        setTodos('items', [
            { text: 'go do something productive', id: 2 },
            { text: 'do another something that is productive', id: 1 },
        ]);
    });

    const [input, setInput] = createSignal('Orange');

    const addTodoItem = () => {
        setTodos({
            items: [{ text: input(), id: todos.counter }, ...todos.items],
            counter: todos.counter + 1,
        });
        setInput('');
    };

    const removeTodoItem = (index: number) => {
        setTodos('items', (t) => t.filter((item) => item.id !== index));
    };

    return (
        <>
            <div class={styles.container}>
                <TextField.Root
                    value={input()}
                    onValueChange={setInput}
                    validationState={
                        input() !== 'something' ? 'invalid' : 'valid'
                    }
                >
                    <TextField.Label />
                    <TextField.Input
                        placeholder="What do you have to do today?"
                        name="todo"
                    />
                    <TextField.Description>
                        You can have a description appear like this
                    </TextField.Description>
                    <TextField.ErrorMessage class={styles.error}>
                        If you type anything other than "something" the error
                        shows
                    </TextField.ErrorMessage>
                </TextField.Root>
                <Button.Root
                    class={styles.kobalteButton}
                    onClick={() => {
                        addTodoItem();
                    }}
                >
                    Add Todo
                </Button.Root>
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
export default WithKobalte;
