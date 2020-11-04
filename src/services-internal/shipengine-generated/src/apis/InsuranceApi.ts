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
    ConnectInsurerRequestBody1,
    ConnectInsurerRequestBody1FromJSON,
    ConnectInsurerRequestBody1ToJSON,
    ErrorResponseBody1,
    ErrorResponseBody1FromJSON,
    ErrorResponseBody1ToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface AddFundsToInsuranceRequest {
    uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE;
}

export interface ConnectInsurerRequest {
    connectInsurerRequestBody1: ConnectInsurerRequestBody1;
}

/**
 * 
 */
export class InsuranceApi extends runtime.BaseAPI {

    /**
     * You may need to auto fund your account from time to time. For example, if you don\'t normally ship items over $100, and may want to add funds to insurance rather than keeping the account funded. 
     * Add Funds To Insurance
     */
    async addFundsToInsuranceRaw(requestParameters: AddFundsToInsuranceRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.uNKNOWNBASETYPE === null || requestParameters.uNKNOWNBASETYPE === undefined) {
            throw new runtime.RequiredError('uNKNOWNBASETYPE','Required parameter requestParameters.uNKNOWNBASETYPE was null or undefined when calling addFundsToInsurance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/insurance/shipsurance/add_funds`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.uNKNOWNBASETYPE),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * You may need to auto fund your account from time to time. For example, if you don\'t normally ship items over $100, and may want to add funds to insurance rather than keeping the account funded. 
     * Add Funds To Insurance
     */
    async addFundsToInsurance(requestParameters: AddFundsToInsuranceRequest): Promise<object> {
        const response = await this.addFundsToInsuranceRaw(requestParameters);
        return await response.value();
    }

    /**
     * Connect a Shipsurance Account
     * Connect a Shipsurance Account
     */
    async connectInsurerRaw(requestParameters: ConnectInsurerRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.connectInsurerRequestBody1 === null || requestParameters.connectInsurerRequestBody1 === undefined) {
            throw new runtime.RequiredError('connectInsurerRequestBody1','Required parameter requestParameters.connectInsurerRequestBody1 was null or undefined when calling connectInsurer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/connections/insurance/shipsurance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConnectInsurerRequestBody1ToJSON(requestParameters.connectInsurerRequestBody1),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Connect a Shipsurance Account
     * Connect a Shipsurance Account
     */
    async connectInsurer(requestParameters: ConnectInsurerRequest): Promise<object> {
        const response = await this.connectInsurerRaw(requestParameters);
        return await response.value();
    }

    /**
     * Disconnect a Shipsurance Account
     * Disconnect a Shipsurance Account
     */
    async disconnectInsurerRaw(): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/connections/insurance/shipsurance`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Disconnect a Shipsurance Account
     * Disconnect a Shipsurance Account
     */
    async disconnectInsurer(): Promise<object> {
        const response = await this.disconnectInsurerRaw();
        return await response.value();
    }

    /**
     * Retrieve the balance of your Shipsurance account.
     * Get Insurance Funds Balance
     */
    async getInsuranceBalanceRaw(): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/insurance/shipsurance/balance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve the balance of your Shipsurance account.
     * Get Insurance Funds Balance
     */
    async getInsuranceBalance(): Promise<object> {
        const response = await this.getInsuranceBalanceRaw();
        return await response.value();
    }

}
