({
	 handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "success",
            "title": "Event Registration has completed",
            "message": "Record ID: " + event.getParam("Name")
        });
    }
})