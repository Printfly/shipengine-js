/* tslint:disable */
/* eslint-disable */
/**
 * ShipEngine API
 * ShipEngine\'s easy-to-use REST API lets you manage all of your shipping needs without worrying about the complexities of different carrier APIs and protocols. We handle all the heavy lifting so you can focus on providing a first-class shipping experience for your customers at the best possible prices.  Each of ShipEngine\'s features can be used by itself or in conjunction with each other to build powerful shipping functionality into your application or service.  ## Getting Started If you\'re new to REST APIs then be sure to read our [introduction to REST](https://www.shipengine.com/docs/rest/) to understand the basics.  Learn how to [authenticate yourself to ShipEngine](https://www.shipengine.com/docs/auth/), and then use our [sandbox environment](https://www.shipengine.com/docs/sandbox/) to kick the tires and get familiar with our API. If you run into any problems, then be sure to check the [error handling guide](https://www.shipengine.com/docs/errors/) for tips.  Here are some step-by-step **tutorials** to get you started:    - [Learn how to create your first shipping label](https://www.shipengine.com/docs/labels/create-a-label/)   - [Calculate shipping costs and compare rates across carriers](https://www.shipengine.com/docs/rates/)   - [Track packages on-demand or in real time](https://www.shipengine.com/docs/tracking/)   - [Validate mailing addresses anywhere on Earth](https://www.shipengine.com/docs/addresses/validation/)   ## Shipping Labels for Every Major Carrier ShipEngine makes it easy to [create shipping labels for any carrier](https://www.shipengine.com/docs/labels/create-a-label/) and [download them](https://www.shipengine.com/docs/labels/downloading/) in a [variety of file formats](https://www.shipengine.com/docs/labels/formats/). You can even customize labels with your own [messages](https://www.shipengine.com/docs/labels/messages/) and [images](https://www.shipengine.com/docs/labels/branding/).   ## Real-Time Package Tracking With ShipEngine you can [get the current status of a package](https://www.shipengine.com/docs/tracking/) or [subscribe to real-time tracking updates](https://www.shipengine.com/docs/tracking/webhooks/) via webhooks. You can also create [custimized tracking pages](https://www.shipengine.com/docs/tracking/branded-tracking-page/) with your own branding so your customers will always know where their package is.   ## Compare Shipping Costs Across Carriers Make sure you ship as cost-effectively as possible by [comparing rates across carriers](https://www.shipengine.com/docs/rates/get-shipment-rates/) using the ShipEngine Rates API. Or if you don\'t know the full shipment details yet, then you can [get rate estimates](https://www.shipengine.com/docs/rates/estimate/) with limited address info.   ## Worldwide Address Validation ShipEngine supports [address validation](https://www.shipengine.com/docs/addresses/validation/) for virtually [every country on Earth](https://www.shipengine.com/docs/addresses/validation/countries/), including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others. 
 *
 * The version of the OpenAPI document: 1.1.202010261510
 * Contact: sales@shipengine.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ConnectAccessWorldwideRequestBody1,
    ConnectAmazonBuyShippingRequestBody1,
    ConnectAmazonShippingUk1,
    ConnectApcRequestBody1,
    ConnectAsendiaRequestBody1,
    ConnectAustraliaPostRequestBody1,
    ConnectCanadaPostRequestBody1,
    ConnectDhlEcommerceRequestBody1,
    ConnectDhlExpressAuRequestBody1,
    ConnectDhlExpressCaRequestBody1,
    ConnectDhlExpressRequestBody1,
    ConnectDhlExpressUkRequestBody1,
    ConnectDpdRequestBody1,
    ConnectEndiciaRequestBody1,
    ConnectFedexRequestBody1,
    ConnectFedexUkRequestBody1,
    ConnectFirstmileRequestBody1,
    ConnectGlobegisticsRequestBody1,
    ConnectImexRequestBody1,
    ConnectNewgisticsRequestBody1,
    ConnectOntracRequestBody1,
    ConnectPurolatorRequestBody1,
    ConnectRoyalMailRequestBody1,
    ConnectRrDonnelleyRequestBody1,
    ConnectSekoRequestBody1,
    ConnectSendleRequestBody1,
    ConnectStampsRequestBody1,
    ConnectUpsRequestBody1,
    ConnectAccessWorldwideRequestBody1FromJSONTyped,
    ConnectAccessWorldwideRequestBody1ToJSON,
    ConnectAmazonBuyShippingRequestBody1FromJSONTyped,
    ConnectAmazonBuyShippingRequestBody1ToJSON,
    ConnectAmazonShippingUk1FromJSONTyped,
    ConnectAmazonShippingUk1ToJSON,
    ConnectApcRequestBody1FromJSONTyped,
    ConnectApcRequestBody1ToJSON,
    ConnectAsendiaRequestBody1FromJSONTyped,
    ConnectAsendiaRequestBody1ToJSON,
    ConnectAustraliaPostRequestBody1FromJSONTyped,
    ConnectAustraliaPostRequestBody1ToJSON,
    ConnectCanadaPostRequestBody1FromJSONTyped,
    ConnectCanadaPostRequestBody1ToJSON,
    ConnectDhlEcommerceRequestBody1FromJSONTyped,
    ConnectDhlEcommerceRequestBody1ToJSON,
    ConnectDhlExpressAuRequestBody1FromJSONTyped,
    ConnectDhlExpressAuRequestBody1ToJSON,
    ConnectDhlExpressCaRequestBody1FromJSONTyped,
    ConnectDhlExpressCaRequestBody1ToJSON,
    ConnectDhlExpressRequestBody1FromJSONTyped,
    ConnectDhlExpressRequestBody1ToJSON,
    ConnectDhlExpressUkRequestBody1FromJSONTyped,
    ConnectDhlExpressUkRequestBody1ToJSON,
    ConnectDpdRequestBody1FromJSONTyped,
    ConnectDpdRequestBody1ToJSON,
    ConnectEndiciaRequestBody1FromJSONTyped,
    ConnectEndiciaRequestBody1ToJSON,
    ConnectFedexRequestBody1FromJSONTyped,
    ConnectFedexRequestBody1ToJSON,
    ConnectFedexUkRequestBody1FromJSONTyped,
    ConnectFedexUkRequestBody1ToJSON,
    ConnectFirstmileRequestBody1FromJSONTyped,
    ConnectFirstmileRequestBody1ToJSON,
    ConnectGlobegisticsRequestBody1FromJSONTyped,
    ConnectGlobegisticsRequestBody1ToJSON,
    ConnectImexRequestBody1FromJSONTyped,
    ConnectImexRequestBody1ToJSON,
    ConnectNewgisticsRequestBody1FromJSONTyped,
    ConnectNewgisticsRequestBody1ToJSON,
    ConnectOntracRequestBody1FromJSONTyped,
    ConnectOntracRequestBody1ToJSON,
    ConnectPurolatorRequestBody1FromJSONTyped,
    ConnectPurolatorRequestBody1ToJSON,
    ConnectRoyalMailRequestBody1FromJSONTyped,
    ConnectRoyalMailRequestBody1ToJSON,
    ConnectRrDonnelleyRequestBody1FromJSONTyped,
    ConnectRrDonnelleyRequestBody1ToJSON,
    ConnectSekoRequestBody1FromJSONTyped,
    ConnectSekoRequestBody1ToJSON,
    ConnectSendleRequestBody1FromJSONTyped,
    ConnectSendleRequestBody1ToJSON,
    ConnectStampsRequestBody1FromJSONTyped,
    ConnectStampsRequestBody1ToJSON,
    ConnectUpsRequestBody1FromJSONTyped,
    ConnectUpsRequestBody1ToJSON,
} from './';

/**
 * @type ConnectCarrierRequestBody
 * 
 * @export
 */
export type ConnectCarrierRequestBody = ConnectAccessWorldwideRequestBody1 | ConnectAmazonBuyShippingRequestBody1 | ConnectAmazonShippingUk1 | ConnectApcRequestBody1 | ConnectAsendiaRequestBody1 | ConnectAustraliaPostRequestBody1 | ConnectCanadaPostRequestBody1 | ConnectDhlEcommerceRequestBody1 | ConnectDhlExpressAuRequestBody1 | ConnectDhlExpressCaRequestBody1 | ConnectDhlExpressRequestBody1 | ConnectDhlExpressUkRequestBody1 | ConnectDpdRequestBody1 | ConnectEndiciaRequestBody1 | ConnectFedexRequestBody1 | ConnectFedexUkRequestBody1 | ConnectFirstmileRequestBody1 | ConnectGlobegisticsRequestBody1 | ConnectImexRequestBody1 | ConnectNewgisticsRequestBody1 | ConnectOntracRequestBody1 | ConnectPurolatorRequestBody1 | ConnectRoyalMailRequestBody1 | ConnectRrDonnelleyRequestBody1 | ConnectSekoRequestBody1 | ConnectSendleRequestBody1 | ConnectStampsRequestBody1 | ConnectUpsRequestBody1;

export function ConnectCarrierRequestBodyFromJSON(json: any): ConnectCarrierRequestBody {
    return ConnectCarrierRequestBodyFromJSONTyped(json, false);
}

export function ConnectCarrierRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectCarrierRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ConnectAccessWorldwideRequestBody1FromJSONTyped(json, true), ...ConnectAmazonBuyShippingRequestBody1FromJSONTyped(json, true), ...ConnectAmazonShippingUk1FromJSONTyped(json, true), ...ConnectApcRequestBody1FromJSONTyped(json, true), ...ConnectAsendiaRequestBody1FromJSONTyped(json, true), ...ConnectAustraliaPostRequestBody1FromJSONTyped(json, true), ...ConnectCanadaPostRequestBody1FromJSONTyped(json, true), ...ConnectDhlEcommerceRequestBody1FromJSONTyped(json, true), ...ConnectDhlExpressAuRequestBody1FromJSONTyped(json, true), ...ConnectDhlExpressCaRequestBody1FromJSONTyped(json, true), ...ConnectDhlExpressRequestBody1FromJSONTyped(json, true), ...ConnectDhlExpressUkRequestBody1FromJSONTyped(json, true), ...ConnectDpdRequestBody1FromJSONTyped(json, true), ...ConnectEndiciaRequestBody1FromJSONTyped(json, true), ...ConnectFedexRequestBody1FromJSONTyped(json, true), ...ConnectFedexUkRequestBody1FromJSONTyped(json, true), ...ConnectFirstmileRequestBody1FromJSONTyped(json, true), ...ConnectGlobegisticsRequestBody1FromJSONTyped(json, true), ...ConnectImexRequestBody1FromJSONTyped(json, true), ...ConnectNewgisticsRequestBody1FromJSONTyped(json, true), ...ConnectOntracRequestBody1FromJSONTyped(json, true), ...ConnectPurolatorRequestBody1FromJSONTyped(json, true), ...ConnectRoyalMailRequestBody1FromJSONTyped(json, true), ...ConnectRrDonnelleyRequestBody1FromJSONTyped(json, true), ...ConnectSekoRequestBody1FromJSONTyped(json, true), ...ConnectSendleRequestBody1FromJSONTyped(json, true), ...ConnectStampsRequestBody1FromJSONTyped(json, true), ...ConnectUpsRequestBody1FromJSONTyped(json, true) };
}

export function ConnectCarrierRequestBodyToJSON(value?: ConnectCarrierRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return { ...ConnectAccessWorldwideRequestBody1ToJSON(value), ...ConnectAmazonBuyShippingRequestBody1ToJSON(value), ...ConnectAmazonShippingUk1ToJSON(value), ...ConnectApcRequestBody1ToJSON(value), ...ConnectAsendiaRequestBody1ToJSON(value), ...ConnectAustraliaPostRequestBody1ToJSON(value), ...ConnectCanadaPostRequestBody1ToJSON(value), ...ConnectDhlEcommerceRequestBody1ToJSON(value), ...ConnectDhlExpressAuRequestBody1ToJSON(value), ...ConnectDhlExpressCaRequestBody1ToJSON(value), ...ConnectDhlExpressRequestBody1ToJSON(value), ...ConnectDhlExpressUkRequestBody1ToJSON(value), ...ConnectDpdRequestBody1ToJSON(value), ...ConnectEndiciaRequestBody1ToJSON(value), ...ConnectFedexRequestBody1ToJSON(value), ...ConnectFedexUkRequestBody1ToJSON(value), ...ConnectFirstmileRequestBody1ToJSON(value), ...ConnectGlobegisticsRequestBody1ToJSON(value), ...ConnectImexRequestBody1ToJSON(value), ...ConnectNewgisticsRequestBody1ToJSON(value), ...ConnectOntracRequestBody1ToJSON(value), ...ConnectPurolatorRequestBody1ToJSON(value), ...ConnectRoyalMailRequestBody1ToJSON(value), ...ConnectRrDonnelleyRequestBody1ToJSON(value), ...ConnectSekoRequestBody1ToJSON(value), ...ConnectSendleRequestBody1ToJSON(value), ...ConnectStampsRequestBody1ToJSON(value), ...ConnectUpsRequestBody1ToJSON(value) };
}
