exports.handler = async (event, context, callback) => {
    const item_no = event.item_no
    console.log(`item::: ${item_no}`)
   
   // TODO fetch price from database
    const price = {item_no: item_no, 
                    price: Math.random(1,100)*100, 
                    lastUpdated: new Date().toDateString()}
    callback(null, price)
}