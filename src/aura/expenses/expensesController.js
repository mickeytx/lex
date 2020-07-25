({  doInit: function(component, event, helper)
    {   //  create the action
        var action = component.get("c.getExpenses");
        //  add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        //  send action off to be executed
        $A.enqueueAction(action);
    },

    handleCreateExpense: function(component, event, helper)
    {
        var newExpense = event.getParam("expense");
        helper.createExpense(component, newExpense);
    },

    handleUpdateExpense: function(component, event, helper)
    {
        var updatedExp = event.getParam("expense");
        helper.updateExpense(component, updatedExp);
    },

})