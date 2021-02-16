/* tslint:disable */
/* eslint-disable */
/**
 * Section API
 * Get edgey with the Section API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface BillingHistory
 */
export interface BillingHistory {
    /**
     * Billing period (UTC)
     * @type {string}
     * @memberof BillingHistory
     */
    date?: any;
    /**
     * Total cost of bandwidth or pageview
     * @type {number}
     * @memberof BillingHistory
     */
    totalCost?: any;
    /**
     * Page views processed by Platform Routing Tier
     * @type {number}
     * @memberof BillingHistory
     */
    viewBase?: any;
    /**
     * Page views processed by Varnish
     * @type {number}
     * @memberof BillingHistory
     */
    viewVarnish?: any;
    /**
     * Page views processed by ModSecurity
     * @type {number}
     * @memberof BillingHistory
     */
    viewModsecurity?: any;
    /**
     * Gigabytes processed through Australia
     * @type {number}
     * @memberof BillingHistory
     */
    dataAu?: any;
    /**
     * Gigabytes processed through North America
     * @type {number}
     * @memberof BillingHistory
     */
    dataUs?: any;
    /**
     * Gigabytes processed through Europe
     * @type {number}
     * @memberof BillingHistory
     */
    dataEu?: any;
    /**
     * Gigabytes processed by Varnish
     * @type {number}
     * @memberof BillingHistory
     */
    dataVarnish?: any;
    /**
     * Gigabytes processed by ModSecurity
     * @type {number}
     * @memberof BillingHistory
     */
    dataModsecurity?: any;
}