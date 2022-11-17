import React from 'react';
import {tw} from 'twind';
import Input from './component/input';
import List from './component/list';
import Title from './component/title';
import {Provider} from 'jotai';
import './global.css';
import '@akrc/ringo/style/message/ant.css';
import '@akrc/ringo/style/notice/ant.css';

const App = () => {
	return (
		<Provider>
			<div
				className={tw`flex flex-col items-center max-w-xl w-full m-auto p-4 h-screen`}
			>
				<Title />
				<Input />
				<List />
			</div>
		</Provider>
	);
};

export default App;
