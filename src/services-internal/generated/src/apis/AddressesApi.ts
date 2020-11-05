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


import * as runtime from '../runtime';
import {
    ErrorResponseBody1,
    ErrorResponseBody1FromJSON,
    ErrorResponseBody1ToJSON,
    ParseAddressRequestBody1,
    ParseAddressRequestBody1FromJSON,
    ParseAddressRequestBody1ToJSON,
    ParseAddressResponseBody1,
    ParseAddressResponseBody1FromJSON,
    ParseAddressResponseBody1ToJSON,
} from '../models';

export interface ParseAddressRequest {
    parseAddressRequestBody1: ParseAddressRequestBody1;
}

export interface ValidateAddressRequest {
    requestBody: Array<object>;
}

/**
 * 
 */
export class AddressesApi extends runtime.BaseAPI {

    /**
     * The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine\'s address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that\'s used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.  > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 
     * Parse an address
     */
    async parseAddressRaw(requestParameters: ParseAddressRequest): Promise<runtime.ApiResponse<ParseAddressResponseBody1>> {
        if (requestParameters.parseAddressRequestBody1 === null || requestParameters.parseAddressRequestBody1 === undefined) {
            throw new runtime.RequiredError('parseAddressRequestBody1','Required parameter requestParameters.parseAddressRequestBody1 was null or undefined when calling parseAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/addresses/recognize`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ParseAddressRequestBody1ToJSON(requestParameters.parseAddressRequestBody1),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ParseAddressResponseBody1FromJSON(jsonValue));
    }

    /**
     * The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine\'s address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that\'s used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.  > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 
     * Parse an address
     */
    async parseAddress(requestParameters: ParseAddressRequest): Promise<ParseAddressResponseBody1> {
        const response = await this.parseAddressRaw(requestParameters);
        return await response.value();
    }

    /**
     * Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues. 
     * Validate An Address
     */
    async validateAddressRaw(requestParameters: ValidateAddressRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling validateAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/addresses/validate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues. 
     * Validate An Address
     */
    async validateAddress(requestParameters: ValidateAddressRequest): Promise<Array<object>> {
        const response = await this.validateAddressRaw(requestParameters);
        return await response.value();
    }

}