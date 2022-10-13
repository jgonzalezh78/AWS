exports.handler = async (event, context, callback) => {
    // TODO fetch from database
    var sum = 0;
    console.log(`item::: ${event.items}`)
    for(var a=0;a<=event.items.length-1;a++){
        console.log(`item::: ${event.items[a].price}`)
        sum += event.items[a].price;
    }
    console.log(`total::: ${sum}`)
    var pass = (Math.random()>=0.5)? 1 : 0
    console.log(`pass::: ${pass}`)
    var bool = pass ? 1 : 0
    
    
    const payment = {   total: sum,  
                        customer_id: event.customer.customer_id,
                        customer_name: event.customer.customer_name,
                        payment_pref: event.customer.payment_pref,
                        email: event.customer.email,
                        mobile: event.customer.mobile,
                        payment_id: Math.floor(Math.random() * 999999),
                        status : bool
    }
    

    
    
    callback(null,payment)
};
