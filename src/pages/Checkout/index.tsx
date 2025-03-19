import PaymentForm from "@/components/Payment"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');


const CheckoutPage = () => {

  const options: StripeElementsOptions = {
    amount: 10000,
    currency: 'usd',
    mode: 'payment',
  }
  
  return (
    <>
      <div className="bg-gradient-to-br from-purple-800 to-indigo-900 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-indigo-900 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-indigo-900 to-transparent"></div>
      <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Payment Summary Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Order Summary</h2>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-semibold">$100</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700">Shipping</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700">Tax</span>
                  <span className="font-semibold">$0.00</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">$100</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  By completing your purchase, you agree to our Terms of Service.
                </p>
              </div>
            </div>

            {/* Stripe Card Input Section (Placeholder) */}
            <div>
              <h2 className="text-2xl font-semibold">Payment Details</h2>

              <div className="mt-6">
                {/* Stripe Card Input Component Goes Here */}
                {/* Replace this placeholder with your Stripe component */}
                <div className="border rounded-md p-6 border-gray-300">
                  <Elements stripe={stripePromise} options={options}>
                    <PaymentForm />
                  </Elements>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CheckoutPage