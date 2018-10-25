// This file contains all actions

import { ADD_ITEM } from './constants';

export const addItem = (item: any) => (
	{
		type: ADD_ITEM,
		payload: item
	});