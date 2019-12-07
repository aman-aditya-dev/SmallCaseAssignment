import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import FolderContainer from './folder/FolderContainer';
import AddFolder from './folder/AddFolder';

import history from '../history';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Switch>
						<Route path="/" exact component={FolderContainer} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
