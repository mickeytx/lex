({
    createExpense: function(component, expense)
    {
        this.saveExpense(component, expense, function(response)
        {
            var state = response.getState();

            if (state === "SUCCESS")
            {
                var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }

            else if (state === "ERROR")
            {
                var errors = response.getError();

                if (errors)
                {
                    if (errors[0] && errors[0].message)
                    {
                        window.alert(errors[0].message);
                    }

                }

            }

        });
    },

    saveExpense: function(component, expense, callback)
    {
        var action = component.get("c.saveExpense");
        action.setParams
        ({
            "expense": expense
        });

        if (callback)
        {
            action.setCallback(this, callback);
        }

        $A.enqueueAction(action);
    },

    updateExpense: function(component, expense)
    {
        this.saveExpense(component, expense);
    },

})