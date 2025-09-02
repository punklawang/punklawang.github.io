document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: '鲜肉月饼', price: 4 },
        { name: '豆沙月饼', price: 3 },
        { name: '蛋黄酥', price: 8 }
    ];

    const productItems = document.querySelectorAll('.product-item');
    const totalAmountSpan = document.getElementById('total-amount');
    const resetButton = document.getElementById('reset-btn');

    let total = 0;

    function updateTotalPrice() {
        total = 0;
        productItems.forEach((item, index) => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += quantity * products[index].price;
        });
        totalAmountSpan.textContent = total;
    }

    productItems.forEach((item, index) => {
        const minusBtn = item.querySelector('.minus-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const quantitySpan = item.querySelector('.quantity');
        
        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotalPrice();
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotalPrice();
        });
    });

    resetButton.addEventListener('click', () => {
        productItems.forEach(item => {
            item.querySelector('.quantity').textContent = '0';
        });
        updateTotalPrice();
    });
});