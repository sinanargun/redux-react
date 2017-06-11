import { ADD_BOX, DELETE_BOX } from '../actions/index';

export default function(state=0, action)
{

	switch (action.type)
	{
		case ADD_BOX:
			state++;
			return state;
		case DELETE_BOX:
			state--;
			return state;
		default:
			return state;

	}
}