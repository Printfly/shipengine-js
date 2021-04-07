/**
 * Indicates where an error originated from. This lets you know whether you should
 * contact ShipEngine for support or if you should contact the carrier or
 * marketplace instead.
 *
 * @see https://www.shipengine.com/docs/errors/codes/#error-source
 */
export enum ErrorSource {
  /**
   * The error is from ShipEngine. If you have any questions or require support,
   * please contact us
   */
  ShipEngine = "shipengine",

  /**
   * The error came from a shipping carrier (such as UPS, FedEx, DHL, etc).
   * ShipEngine support may be able to help clarify the error for you, but if
   * the problem is with your carrier account, then you will need to contact
   * them directly.
   */
  Carrier = "carrier",

  /**
   * The error came from an order source (such as Shopify, Ebay, WalMart, etc).
   * ShipEngine support may be able to help clarify the error for you, but if
   * the problem is with your seller account, then you will need to contact
   * them directly.
   */
  OrderSource = "order_source",
}
