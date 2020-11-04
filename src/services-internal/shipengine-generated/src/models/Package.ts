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
/**
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
 * @export
 * @interface Package
 */
export interface Package {
    /**
     * The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
     * @type {string}
     * @memberof Package
     */
    packageCode?: string;
    /**
     * The package weight
     * @type {object}
     * @memberof Package
     */
    weight: object;
    /**
     * The package dimensions
     * @type {object}
     * @memberof Package
     */
    dimensions?: object;
    /**
     * The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
     * @type {object}
     * @memberof Package
     */
    insuredValue?: object;
    /**
     * The tracking number for the package.  The format depends on the carrier.
     * @type {string}
     * @memberof Package
     */
    readonly trackingNumber?: string;
    /**
     * 
     * @type {object}
     * @memberof Package
     */
    labelMessages?: object;
    /**
     * An external package id.
     * @type {string}
     * @memberof Package
     */
    externalPackageId?: string;
}

export function PackageFromJSON(json: any): Package {
    return PackageFromJSONTyped(json, false);
}

export function PackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Package {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'packageCode': !exists(json, 'package_code') ? undefined : json['package_code'],
        'weight': json['weight'],
        'dimensions': !exists(json, 'dimensions') ? undefined : json['dimensions'],
        'insuredValue': !exists(json, 'insured_value') ? undefined : json['insured_value'],
        'trackingNumber': !exists(json, 'tracking_number') ? undefined : json['tracking_number'],
        'labelMessages': !exists(json, 'label_messages') ? undefined : json['label_messages'],
        'externalPackageId': !exists(json, 'external_package_id') ? undefined : json['external_package_id'],
    };
}

export function PackageToJSON(value?: Package | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'package_code': value.packageCode,
        'weight': value.weight,
        'dimensions': value.dimensions,
        'insured_value': value.insuredValue,
        'label_messages': value.labelMessages,
        'external_package_id': value.externalPackageId,
    };
}


