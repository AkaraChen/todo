import React from 'react';
import {tw} from 'twind';
import {todos} from '../store';
import {useAtom} from 'jotai';
import Todo from './todo';
import useRefresh from '../store/refresh';

const EmptyState = () => {
	return (
		<div className={tw`flex flex-col items-center m-8`}>
			<img src="../assets/empty.svg" className={tw`m-auto w-60 p-4`} />
			<p className={tw`text(gray-500)`}>No data</p>
		</div>
	);
};

const List = () => {
	const [todo] = useAtom(todos);
	useRefresh();
	return (
		<div className={tw`flex flex-col w-full mt-4`}>
			{todo.length ? (
				<div>
					{todo.map((item, index) => (
						<Todo
							id={item.id}
							description={item.description}
							active={item.active}
							key={index}
						/>
					))}
				</div>
			) : (
				<EmptyState />
			)}
		</div>
	);
};

export default List;
