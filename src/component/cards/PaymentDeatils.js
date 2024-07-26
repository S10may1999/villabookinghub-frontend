import React from 'react'

function PaymentDeatils() {
  return (

    <div class="container mx-auto px-4 py-0">
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
      {/* <!-- Payment Summary --> */}
      <div class="mb-6">
        <h2 class="text-2xl font-bold mb-6">Payment Summary</h2>
        <div class="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$100.00</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Tax</span>
          <span>$10.00</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>
        <div class="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>$115.00</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PaymentDeatils