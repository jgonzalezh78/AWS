exports.handler = async (event, context, callback) => {
    // TODO fetch from database
    const order = {  
                        customer_id: event.customer_id,
                        customer_name: event.customer_name,
                        payment_pref: event.payment_pref,
                        email: event.email,
                        mobile: event.mobile,
                        payment_id: event.payment_id,
                        order_id : Math.floor(Math.random()*1000)
    }
    callback(null,order)
};
