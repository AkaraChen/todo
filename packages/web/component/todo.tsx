import React, {useState} from 'react';
import {tw} from 'twind';
import {IconCircleCheck, IconCircleMinus, IconRefreshDot} from '@tabler/icons';
import {trpc} from '../store/trpc';
import {notice} from '@akrc/ringo';
import {useSetAtom} from 'jotai';
import {todos} from '../store';

const Todo = ({description, active, id}: Properties) => {
    const [status, setStatus] = useState(active);
    const [display, setDisplay] = useState(true);
    const set = useSetAtom(todos);
    const toggle = () => {
        const current = !status;
        trpc.todo.toggle
            .mutate({active: current, id})
            .then(() => {
                setStatus(current);
                if (!current) {
                    notice({text: 'Congratulations!', type: 'success'});
                } else {
                    notice({text: "What's up?", type: 'info'});
                }
            })
            .catch(() => {
                notice({text: 'Toggle failed.'});
            });
    };
    const remove = () => {
        trpc.todo.delete
            .mutate(id)
            .then(() => {
                set((todo) => {
                    const index = todo.findIndex((item) => item.id === id);
                    return [...todo.slice(0, index), ...todo.slice(index)];
                });
                setDisplay(false);
            })
            .catch(() => {
                notice({text: 'Remove failed.'});
            });
    };
    return (
        <div
            className={tw`flex justify-between py-2 px-3 shadow rounded mb-4 bg-white text(gray-700)`}
            style={{display: display ? '' : 'none'}}
        >
            {description}
            <div className={tw`flex`}>
                {status ? (
                    <IconCircleCheck
                        className={tw`mr-2`}
                        color='green'
                        onClick={toggle}
                    />
                ) : (
                    <IconRefreshDot
                        className={tw`mr-2`}
                        color='orange'
                        onClick={toggle}
                    />
                )}
                <IconCircleMinus
                    color='currentColor'
                    className={tw`text-gray-700`}
                    onClick={remove}
                />
            </div>
        </div>
    );
};

interface Properties {
    id: number;
    description: string;
    active: boolean;
}

export default Todo;
