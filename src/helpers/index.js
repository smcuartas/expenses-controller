const toCash = (quantity) => {
    return quantity.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export default toCash