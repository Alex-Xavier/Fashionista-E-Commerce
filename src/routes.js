import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Page from './pages/Page'

function Routes() {
  return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Page} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
