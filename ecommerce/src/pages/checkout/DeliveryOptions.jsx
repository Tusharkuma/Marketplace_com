import { formatMoney } from "../../utils/money.jsx";
import dayjs from "dayjs";

export function DeliveryOptions({ cartItem, deliveryOptions }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOptions.map((DeliveryOption) => {
        let priceString = "FreeShipping";
        if (DeliveryOption.priceCents > 0) {
          priceString = `${formatMoney(DeliveryOption.priceCents)} -Shipping`;
        }

        return (
          <div key={DeliveryOption.id} className="delivery-option">
            <input
              type="radio"
              checked={DeliveryOption.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(DeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}