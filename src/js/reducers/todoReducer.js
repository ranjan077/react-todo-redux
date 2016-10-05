export default function todoReducer(state=null, action) {
	switch(action.type){
		case 'EDIT_BTN-CLICK': {
			return {
				editable: true
			}
		}
		break;
		case 'SAVE_BTN-CLICK': {
			return {
				editable: false
			}
		}
		break;
		default: {
			return  false
		}
	}
}