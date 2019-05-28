import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ViewMore from './ViewMore';

storiesOf('ViewMore', module).add('default', () => {
	let content = (
		<div>
			<h1>Teste</h1>
		</div>
	)

	return (
		<ViewMore>{content}</ViewMore>
	)
});
