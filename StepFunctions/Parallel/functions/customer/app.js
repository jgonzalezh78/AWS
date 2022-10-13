exports.handler = async (event, context, callback) => {
    // TODO fetch from database
    callback(null,
                {
                    customer_id: event.customer_id, 
                    customer_name: "John Doe", 
                    payment_pref: "Credit Card",
                    email: "john.doe@yahoo.com", 
                    mobile: "677896678"
                }
            )
};
