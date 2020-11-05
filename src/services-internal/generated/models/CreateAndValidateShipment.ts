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
    Address,
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressValidationResult,
    AddressValidationResultFromJSON,
    AddressValidationResultFromJSONTyped,
    AddressValidationResultToJSON,
    AdvancedShipmentOptions,
    AdvancedShipmentOptionsFromJSON,
    AdvancedShipmentOptionsFromJSONTyped,
    AdvancedShipmentOptionsToJSON,
    CreateShipmentResponseBodyFields,
    CreateShipmentResponseBodyFieldsFromJSON,
    CreateShipmentResponseBodyFieldsFromJSONTyped,
    CreateShipmentResponseBodyFieldsToJSON,
    DeliveryConfirmation,
    DeliveryConfirmationFromJSON,
    DeliveryConfirmationFromJSONTyped,
    DeliveryConfirmationToJSON,
    InsuranceProvider,
    InsuranceProviderFromJSON,
    InsuranceProviderFromJSONTyped,
    InsuranceProviderToJSON,
    InternationalShipmentOptions,
    InternationalShipmentOptionsFromJSON,
    InternationalShipmentOptionsFromJSONTyped,
    InternationalShipmentOptionsToJSON,
    OrderSourceName,
    OrderSourceNameFromJSON,
    OrderSourceNameFromJSONTyped,
    OrderSourceNameToJSON,
    Package,
    PackageFromJSON,
    PackageFromJSONTyped,
    PackageToJSON,
    PartialShipment,
    PartialShipmentFromJSON,
    PartialShipmentFromJSONTyped,
    PartialShipmentToJSON,
    ShipmentItem,
    ShipmentItemFromJSON,
    ShipmentItemFromJSONTyped,
    ShipmentItemToJSON,
    ShipmentStatus,
    ShipmentStatusFromJSON,
    ShipmentStatusFromJSONTyped,
    ShipmentStatusToJSON,
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
    Weight,
    WeightFromJSON,
    WeightFromJSONTyped,
    WeightToJSON,
} from './';

/**
 * A create and validate shipment resource
 * @export
 * @interface CreateAndValidateShipment
 */
export interface CreateAndValidateShipment {
    /**
     * A string that uniquely identifies the shipment
     * @type {string}
     * @memberof CreateAndValidateShipment
     */
    readonly shipmentId?: string;
    /**
     * The carrier account that is billed for the shipping charges
     * @type {string}
     * @memberof CreateAndValidateShipment
     */
    carrierId?: string;
    /**
     * The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
     * @type {string}
     * @memberof CreateAndValidateShipment
     */
    serviceCode?: string;
    /**
     * ID that the Order Source assigned
     * @type {string}
     * @memberof CreateAndValidateShipment
     */
    externalOrderId?: string | null;
    /**
     * Describe the packages included in this shipment as related to potential metadata that was imported from
     * external order sources
     * @type {Array<ShipmentItem>}
     * @memberof CreateAndValidateShipment
     */
    items?: Array<ShipmentItem>;
    /**
     * You can optionally use this field to store your own identifier for this shipment.
     * 
     * > **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.
     * @type {string}
     * @memberof CreateAndValidateShipment
     */
    externalShipmentId?: string | null;
    /**
     * The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
     * @type {Date}
     * @memberof CreateAndValidateShipment
     */
    shipDate?: Date;
    /**
     * The date and time that the shipment was created in ShipEngine.
     * @type {Date}
     * @memberof CreateAndValidateShipment
     */
    readonly createdAt?: Date;
    /**
     * The date and time that the shipment was created or last modified.
     * @type {Date}
     * @memberof CreateAndValidateShipment
     */
    readonly modifiedAt?: Date;
    /**
     * The current status of the shipment
     * @type {ShipmentStatus}
     * @memberof CreateAndValidateShipment
     */
    readonly shipmentStatus?: ShipmentStatus;
    /**
     * The recipient's mailing address
     * @type {Address}
     * @memberof CreateAndValidateShipment
     */
    shipTo?: Address;
    /**
     * The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.
     * @type {Address}
     * @memberof CreateAndValidateShipment
     */
    shipFrom?: Address;
    /**
     * The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
     * @type {string}
     * @memberof CreateAndValidateShipment
     */
    warehouseId?: string | null;
    /**
     * The return address for this shipment.  Defaults to the `ship_from` address.
     * @type {Address}
     * @memberof CreateAndValidateShipment
     */
    returnTo?: Address;
    /**
     * The type of delivery confirmation that is required for this shipment.
     * @type {DeliveryConfirmation}
     * @memberof CreateAndValidateShipment
     */
    confirmation?: DeliveryConfirmation;
    /**
     * Customs information.  This is usually only needed for international shipments.
     * @type {InternationalShipmentOptions}
     * @memberof CreateAndValidateShipment
     */
    customs?: InternationalShipmentOptions | null;
    /**
     * Advanced shipment options.  These are entirely optional.
     * @type {AdvancedShipmentOptions}
     * @memberof CreateAndValidateShipment
     */
    advancedOptions?: AdvancedShipmentOptions;
    /**
     * The insurance provider to use for any insured packages in the shipment.
     * @type {InsuranceProvider}
     * @memberof CreateAndValidateShipment
     */
    insuranceProvider?: InsuranceProvider;
    /**
     * Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
     * @type {Array<Tag>}
     * @memberof CreateAndValidateShipment
     */
    readonly tags?: Array<Tag>;
    /**
     * 
     * @type {OrderSourceName}
     * @memberof CreateAndValidateShipment
     */
    orderSourceCode?: OrderSourceName;
    /**
     * The packages in the shipment.
     * 
     * > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
     * @type {Array<Package>}
     * @memberof CreateAndValidateShipment
     */
    packages?: Array<Package>;
    /**
     * The combined weight of all packages in the shipment
     * @type {Weight}
     * @memberof CreateAndValidateShipment
     */
    readonly totalWeight?: Weight;
    /**
     * An array of errors that occurred while creating shipment.
     * @type {Array<string>}
     * @memberof CreateAndValidateShipment
     */
    readonly errors?: Array<string>;
    /**
     * The address validation
     * @type {AddressValidationResult}
     * @memberof CreateAndValidateShipment
     */
    addressValidation?: AddressValidationResult;
}

export function CreateAndValidateShipmentFromJSON(json: any): CreateAndValidateShipment {
    return CreateAndValidateShipmentFromJSONTyped(json, false);
}

export function CreateAndValidateShipmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAndValidateShipment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shipmentId': !exists(json, 'shipment_id') ? undefined : json['shipment_id'],
        'carrierId': !exists(json, 'carrier_id') ? undefined : json['carrier_id'],
        'serviceCode': !exists(json, 'service_code') ? undefined : json['service_code'],
        'externalOrderId': !exists(json, 'external_order_id') ? undefined : json['external_order_id'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(ShipmentItemFromJSON)),
        'externalShipmentId': !exists(json, 'external_shipment_id') ? undefined : json['external_shipment_id'],
        'shipDate': !exists(json, 'ship_date') ? undefined : json['ship_date'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'modifiedAt': !exists(json, 'modified_at') ? undefined : json['modified_at'],
        'shipmentStatus': !exists(json, 'shipment_status') ? undefined : ShipmentStatusFromJSON(json['shipment_status']),
        'shipTo': !exists(json, 'ship_to') ? undefined : AddressFromJSON(json['ship_to']),
        'shipFrom': !exists(json, 'ship_from') ? undefined : AddressFromJSON(json['ship_from']),
        'warehouseId': !exists(json, 'warehouse_id') ? undefined : json['warehouse_id'],
        'returnTo': !exists(json, 'return_to') ? undefined : AddressFromJSON(json['return_to']),
        'confirmation': !exists(json, 'confirmation') ? undefined : DeliveryConfirmationFromJSON(json['confirmation']),
        'customs': !exists(json, 'customs') ? undefined : InternationalShipmentOptionsFromJSON(json['customs']),
        'advancedOptions': !exists(json, 'advanced_options') ? undefined : AdvancedShipmentOptionsFromJSON(json['advanced_options']),
        'insuranceProvider': !exists(json, 'insurance_provider') ? undefined : InsuranceProviderFromJSON(json['insurance_provider']),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
        'orderSourceCode': !exists(json, 'order_source_code') ? undefined : OrderSourceNameFromJSON(json['order_source_code']),
        'packages': !exists(json, 'packages') ? undefined : ((json['packages'] as Array<any>).map(PackageFromJSON)),
        'totalWeight': !exists(json, 'total_weight') ? undefined : WeightFromJSON(json['total_weight']),
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'addressValidation': !exists(json, 'address_validation') ? undefined : AddressValidationResultFromJSON(json['address_validation']),
    };
}

export function CreateAndValidateShipmentToJSON(value?: CreateAndValidateShipment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'carrier_id': value.carrierId,
        'service_code': value.serviceCode,
        'external_order_id': value.externalOrderId,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ShipmentItemToJSON)),
        'external_shipment_id': value.externalShipmentId,
        'ship_date': value.shipDate,
        'ship_to': AddressToJSON(value.shipTo),
        'ship_from': AddressToJSON(value.shipFrom),
        'warehouse_id': value.warehouseId,
        'return_to': AddressToJSON(value.returnTo),
        'confirmation': DeliveryConfirmationToJSON(value.confirmation),
        'customs': InternationalShipmentOptionsToJSON(value.customs),
        'advanced_options': AdvancedShipmentOptionsToJSON(value.advancedOptions),
        'insurance_provider': InsuranceProviderToJSON(value.insuranceProvider),
        'order_source_code': OrderSourceNameToJSON(value.orderSourceCode),
        'packages': value.packages === undefined ? undefined : ((value.packages as Array<any>).map(PackageToJSON)),
        'address_validation': AddressValidationResultToJSON(value.addressValidation),
    };
}

