# Copyright (c) 2023, Mr Ameen and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class GymMembership(Document):
	
	def on_update(self):
		exists = frappe.db.exists(
            "Gym Membership",
            {
                "user_membership": self.user_membership,
                "status_plan": 'Active',
                # check if the membership's end date is later than this membership's start date
                # "end_plan": (">", self.start_plan)
            },
        )
		if exists:
			frappe.throw("There is an active membership for this member")
		else:
			doc = frappe.get_doc({
                "doctype": "Gym Trainer Child",
                "training": self.user_membership,
                "name1": self.full_name,
                "plan": self.member_plan
            })
			doc.insert()
		
