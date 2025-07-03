import CartFormContacts from '@/_shared/cart/form/cart-form-contacts';
import CartFormPayMethod from '@/_shared/cart/form/cart-form-pay-method';

function CartForm() {
    return (
        <form className={'mt-[2%] flex flex-col gap-[20px] xl:gap-[32px]'}>
            <CartFormContacts />
            <CartFormPayMethod />
        </form>
    );
}

export default CartForm;
