import {PaymentElement} from '@stripe/react-stripe-js';

const PaymentForm = () => {
  return (
    <form>
      <PaymentElement />
      <button className='bg-indigo-600 w-full h-10 rounded-md text-white cursor-pointer mt-4'>Submit</button>
    </form>
  );
};

export default PaymentForm;