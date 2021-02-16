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
 * @interface Egress
 */
export interface Egress {
    /**
     * 
     * @type {Array&lt;HttpHeaderFieldName&gt;}
     * @memberof Egress
     */
    removeRequestHeaders?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Egress
     */
    enableSni?: any;
    /**
     * 
     * @type {number}
     * @memberof Egress
     */
    upstreamResponseTimeoutSeconds?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Egress
     */
    verifyCertificate?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Egress
     */
    proxyAcmeChallenge?: any;
    /**
     * 
     * @type {EgressOrigins}
     * @memberof Egress
     */
    origins: any;
}