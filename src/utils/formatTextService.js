var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0,
    //maximumFractionDigits: 0,
});
export function formatPrice(price) {
    return formatter.format(price);
}