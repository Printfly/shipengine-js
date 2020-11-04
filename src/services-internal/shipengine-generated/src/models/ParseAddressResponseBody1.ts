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

import { exists, mapValues } from '../runtime';
import {
    RecognizedEntity1,
    RecognizedEntity1FromJSON,
    RecognizedEntity1FromJSONTyped,
    RecognizedEntity1ToJSON,
} from './';

/**
 * The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
 * @export
 * @interface ParseAddressResponseBody1
 */
export interface ParseAddressResponseBody1 {
    /**
     * A confidence score between zero and one that indicates how certain the API is that it understood the text.
     * @type {number}
     * @memberof ParseAddressResponseBody1
     */
    score: number;
    /**
     * The parsed address.  This address may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.
     * 
     * > **Note:** The address-recognition API does not currently perform any validation of the parsed address, so we recommend that you use the [address-validation API](https://www.shipengine.com/docs/addresses/validation/) to ensure that the address is correct.
     * @type {object}
     * @memberof ParseAddressResponseBody1
     */
    address: object;
    /**
     * All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, or an address line.  Each entity includes the original text and the parsed value.
     * @type {Array<RecognizedEntity1>}
     * @memberof ParseAddressResponseBody1
     */
    entities: Array<RecognizedEntity1>;
}

export function ParseAddressResponseBody1FromJSON(json: any): ParseAddressResponseBody1 {
    return ParseAddressResponseBody1FromJSONTyped(json, false);
}

export function ParseAddressResponseBody1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ParseAddressResponseBody1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'score': json['score'],
        'address': json['address'],
        'entities': ((json['entities'] as Array<any>).map(RecognizedEntity1FromJSON)),
    };
}

export function ParseAddressResponseBody1ToJSON(value?: ParseAddressResponseBody1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'score': value.score,
        'address': value.address,
        'entities': ((value.entities as Array<any>).map(RecognizedEntity1ToJSON)),
    };
}


