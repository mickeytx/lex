({  clickCreate: function(component, event, helper)
    {
        var validExpense = component.find('expenseform').reduce(function 
            (validSoFar, inputCmp)
                {   //  displays error messages for invalid fields
                    inputCmp.showHelpMessageIfInvalid();
                    return validSoFar && inputCmp.get('v.validity').valid;
                }
            ,   true
            );
        //  if we pass error checking, do some real work
        if(validExpense)
        {   //  create the new expense
            var newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    },
})