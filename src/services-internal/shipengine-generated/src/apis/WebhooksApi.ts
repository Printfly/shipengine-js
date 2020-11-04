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
    CreateWebhookRequestBody1,
    CreateWebhookRequestBody1FromJSON,
    CreateWebhookRequestBody1ToJSON,
    ErrorResponseBody1,
    ErrorResponseBody1FromJSON,
    ErrorResponseBody1ToJSON,
    UpdateWebhookRequestBody1,
    UpdateWebhookRequestBody1FromJSON,
    UpdateWebhookRequestBody1ToJSON,
} from '../models';

export interface CreateWebhookRequest {
    createWebhookRequestBody1: CreateWebhookRequestBody1;
}

export interface DeleteWebhookRequest {
    webhookId: string;
}

export interface GetWebhookByIdRequest {
    webhookId: string;
}

export interface UpdateWebhookRequest {
    webhookId: string;
    updateWebhookRequestBody1: UpdateWebhookRequestBody1;
}

/**
 * 
 */
export class WebhooksApi extends runtime.BaseAPI {

    /**
     * Create a webook for specific events in the environment.
     * Create a Webhook
     */
    async createWebhookRaw(requestParameters: CreateWebhookRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.createWebhookRequestBody1 === null || requestParameters.createWebhookRequestBody1 === undefined) {
            throw new runtime.RequiredError('createWebhookRequestBody1','Required parameter requestParameters.createWebhookRequestBody1 was null or undefined when calling createWebhook.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/environment/webhooks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateWebhookRequestBody1ToJSON(requestParameters.createWebhookRequestBody1),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create a webook for specific events in the environment.
     * Create a Webhook
     */
    async createWebhook(requestParameters: CreateWebhookRequest): Promise<object> {
        const response = await this.createWebhookRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete a webhook
     * Delete Webhook By ID
     */
    async deleteWebhookRaw(requestParameters: DeleteWebhookRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling deleteWebhook.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/environment/webhooks/{webhook_id}`.replace(`{${"webhook_id"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete a webhook
     * Delete Webhook By ID
     */
    async deleteWebhook(requestParameters: DeleteWebhookRequest): Promise<string> {
        const response = await this.deleteWebhookRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve individual webhook by an ID
     * Get Webhook By ID
     */
    async getWebhookByIdRaw(requestParameters: GetWebhookByIdRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling getWebhookById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/environment/webhooks/{webhook_id}`.replace(`{${"webhook_id"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve individual webhook by an ID
     * Get Webhook By ID
     */
    async getWebhookById(requestParameters: GetWebhookByIdRequest): Promise<object> {
        const response = await this.getWebhookByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all webhooks currently enabled for the account.
     * List Webhooks
     */
    async listWebhooksRaw(): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/environment/webhooks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List all webhooks currently enabled for the account.
     * List Webhooks
     */
    async listWebhooks(): Promise<Array<object>> {
        const response = await this.listWebhooksRaw();
        return await response.value();
    }

    /**
     * Update the webhook url property
     * Update a Webhook
     */
    async updateWebhookRaw(requestParameters: UpdateWebhookRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling updateWebhook.');
        }

        if (requestParameters.updateWebhookRequestBody1 === null || requestParameters.updateWebhookRequestBody1 === undefined) {
            throw new runtime.RequiredError('updateWebhookRequestBody1','Required parameter requestParameters.updateWebhookRequestBody1 was null or undefined when calling updateWebhook.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/environment/webhooks/{webhook_id}`.replace(`{${"webhook_id"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateWebhookRequestBody1ToJSON(requestParameters.updateWebhookRequestBody1),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Update the webhook url property
     * Update a Webhook
     */
    async updateWebhook(requestParameters: UpdateWebhookRequest): Promise<string> {
        const response = await this.updateWebhookRaw(requestParameters);
        return await response.value();
    }

}
