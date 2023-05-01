// Copyright (c) 2023, Mr Ameen and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Subscription Plan', {
	
	refresh: function(frm) {
		frm.fields_dict['plan_user'].grid.get_field('trainers').get_query = function(){
			// return {
			// 	filters:[
			// 		['Gym Trainer','full_name','=','Availaible']
			// 	]
			// }
		};
	},
});
