// Copyright (c) 2023, Mr Ameen and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Member', {
	// refresh: function(frm) {

	// }
	refresh: function(frm) {
		frm.fields_dict['pick_locker'].grid.get_field('service_locker').get_query = function(){
			return {
				filters:[
					['Gym Locker','status','=','Availaible']
				]
			}
		};
	},

	// after_save: function(frm) {
	// 	frappe.call({
	// 		method:'service_station.services.rest.create_sales_invoice',
	// 		args: {
	// 			'inspection': frm.doc.name
	// 		},
	// 		callback: function(r) {
	// 			//
	// 		}
	// 	});
	// 	// frappe.validated = false; // it will not be submitted for testing
		
	// }
});


frappe.ui.form.on('Gym Locker Child',"name",function(frm,cdt,cdn){
	let selectedRow = locals[cdt][cdn];
	frm.refresh_field('service_locker');
	console.log('selectedRow');
	console.log(selectedRow);
})