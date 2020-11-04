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
 * UPS account settings
 * @export
 * @interface UpsAccountSettings
 */
export interface UpsAccountSettings {
    /**
     * nickname
     * @type {string}
     * @memberof UpsAccountSettings
     */
    nickname?: string;
    /**
     * Indicates if this is the primary UPS account
     * @type {boolean}
     * @memberof UpsAccountSettings
     */
    isPrimaryAccount?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpsAccountSettings
     */
    pickupType?: string;
    /**
     * The use carbon neutral shipping program
     * @type {boolean}
     * @memberof UpsAccountSettings
     */
    useCarbonNeutralShippingProgram?: boolean;
    /**
     * The use ground freight pricing
     * @type {boolean}
     * @memberof UpsAccountSettings
     */
    useGroundFreightPricing?: boolean;
    /**
     * The use consolidation services
     * @type {boolean}
     * @memberof UpsAccountSettings
     */
    useConsolidationServices?: boolean;
    /**
     * The use order number on mail innovations labels
     * @type {boolean}
     * @memberof UpsAccountSettings
     */
    useOrderNumberOnMailInnovationsLabels?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpsAccountSettings
     */
    mailInnovationsEndorsement?: string;
    /**
     * mail innovations cost center
     * @type {string}
     * @memberof UpsAccountSettings
     */
    mailInnovationsCostCenter?: string;
    /**
     * The use negotiated rates
     * @type {boolean}
     * @memberof UpsAccountSettings
     */
    useNegotiatedRates?: boolean;
    /**
     * account postal code
     * @type {string}
     * @memberof UpsAccountSettings
     */
    accountPostalCode?: string;
    /**
     * The invoice
     * @type {object}
     * @memberof UpsAccountSettings
     */
    invoice?: object;
}

export function UpsAccountSettingsFromJSON(json: any): UpsAccountSettings {
    return UpsAccountSettingsFromJSONTyped(json, false);
}

export function UpsAccountSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsAccountSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nickname': !exists(json, 'nickname') ? undefined : json['nickname'],
        'isPrimaryAccount': !exists(json, 'is_primary_account') ? undefined : json['is_primary_account'],
        'pickupType': !exists(json, 'pickup_type') ? undefined : json['pickup_type'],
        'useCarbonNeutralShippingProgram': !exists(json, 'use_carbon_neutral_shipping_program') ? undefined : json['use_carbon_neutral_shipping_program'],
        'useGroundFreightPricing': !exists(json, 'use_ground_freight_pricing') ? undefined : json['use_ground_freight_pricing'],
        'useConsolidationServices': !exists(json, 'use_consolidation_services') ? undefined : json['use_consolidation_services'],
        'useOrderNumberOnMailInnovationsLabels': !exists(json, 'use_order_number_on_mail_innovations_labels') ? undefined : json['use_order_number_on_mail_innovations_labels'],
        'mailInnovationsEndorsement': !exists(json, 'mail_innovations_endorsement') ? undefined : json['mail_innovations_endorsement'],
        'mailInnovationsCostCenter': !exists(json, 'mail_innovations_cost_center') ? undefined : json['mail_innovations_cost_center'],
        'useNegotiatedRates': !exists(json, 'use_negotiated_rates') ? undefined : json['use_negotiated_rates'],
        'accountPostalCode': !exists(json, 'account_postal_code') ? undefined : json['account_postal_code'],
        'invoice': !exists(json, 'invoice') ? undefined : json['invoice'],
    };
}

export function UpsAccountSettingsToJSON(value?: UpsAccountSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nickname': value.nickname,
        'is_primary_account': value.isPrimaryAccount,
        'pickup_type': value.pickupType,
        'use_carbon_neutral_shipping_program': value.useCarbonNeutralShippingProgram,
        'use_ground_freight_pricing': value.useGroundFreightPricing,
        'use_consolidation_services': value.useConsolidationServices,
        'use_order_number_on_mail_innovations_labels': value.useOrderNumberOnMailInnovationsLabels,
        'mail_innovations_endorsement': value.mailInnovationsEndorsement,
        'mail_innovations_cost_center': value.mailInnovationsCostCenter,
        'use_negotiated_rates': value.useNegotiatedRates,
        'account_postal_code': value.accountPostalCode,
        'invoice': value.invoice,
    };
}


