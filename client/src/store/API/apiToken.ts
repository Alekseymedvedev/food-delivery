const val = localStorage.getItem('food-delivery-token');
export const token = JSON.parse(val ? val: '')