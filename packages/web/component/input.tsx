import React, {useState} from 'react';
import {tw} from 'twind';
import {todos} from '../store';
import {trpc} from '../store/trpc';
import {notice} from '@akrc/ringo';
import {useSetAtom} from 'jotai';

const Input = () => {
	const [input, setInput] = useState('');
	const setTodo = useSetAtom(todos);
	const handleInput = (event: {target: HTMLInputElement}) => {
		const target = event.target;
		setInput(target.value);
	};
	const handleClick = () => {
		setInput('');
		trpc.todo.create
			.mutate(input)
			.then((id) => {
				setTodo((todo) => [
					...todo,
					{id, description: input, active: true},
				]);
				notice({
					text: 'Todo has created successfully.',
					type: 'success',
				});
			})
			.catch(() => {
				notice({
					text: 'Todo create failed',
					type: 'error',
				});
			});
	};
	const handleKeyup = (event: {key: string}) => {
		if (event.key === 'Enter') handleClick();
	};
	return (
		<div className={tw`flex w-full justify-center`}>
			<input
				className={tw`border(gray-300 solid 2 hover:blue-400 active:blue-400 focus:blue-400) text(gray-700) outline-none rounded px-2 py-1 w-4/5`}
				onChange={handleInput}
				placeholder="Input your todo"
				onKeyUp={handleKeyup}
				value={input}
			></input>
			<button
				className={tw`shadow px-2 bg(blue-500 hover:blue-400) text(white) outline-none! transition w-1/5 ml-2 rounded`}
				onClick={handleClick}
			>
				Add
			</button>
		</div>
	);
};

export default Input;
