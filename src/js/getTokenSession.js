export async function GetTokenSession(transactionId, {
    requestSource = 'ECOMMERCE',
    merchantCode = '',
    orderNumber = '',
    publicKey = '',
    amount = '',
}) {

    //llamado al backend interno de esta app
    
    const response = await fetch('http://localhost:4242/token', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'transactionId': transactionId},
        body: JSON.stringify({
            requestSource,
            merchantCode,
            orderNumber, 
            publicKey,
            amount,
        }),
    });
    return await response.json();
}
