import frappe


@frappe.whitelist()
def getMemberExist(typeuser,id):
    print('\n\n\ngetMemberExist() \ntypeuser:',typeuser)
    if typeuser == 'trainer':
        obj = frappe.db.get_all('Gym Trainer Child Plan',filters={'parent':id},fields=['name','trainers','full_name'])
        arrtrainerExisted = []
        for x in obj:
            trainer = x.trainers
            print(f'\n\n{x.name} x:{x.full_name},trainers:{trainer}')
            arrtrainerExisted.append(x.trainers)

    data = {
        'arr': arrtrainerExisted
    }
    return data