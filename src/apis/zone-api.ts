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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Body1 } from '../models';
import { Body3 } from '../models';
import { ErrorModel } from '../models';
import { ZoneCandidate } from '../models';
import { ZoneDetail } from '../models';
import { ZoneSummary } from '../models';
/**
 * ZoneApi - axios parameter creator
 * @export
 */
export const ZoneApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a record from a zone
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {string} recordName Record Name
         * @param {string} recordType Record Type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteZoneRecord: async (accountId: number, zoneName: string, recordName: string, recordType: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling deleteZoneRecord.');
            }
            // verify required parameter 'zoneName' is not null or undefined
            if (zoneName === null || zoneName === undefined) {
                throw new RequiredError('zoneName','Required parameter zoneName was null or undefined when calling deleteZoneRecord.');
            }
            // verify required parameter 'recordName' is not null or undefined
            if (recordName === null || recordName === undefined) {
                throw new RequiredError('recordName','Required parameter recordName was null or undefined when calling deleteZoneRecord.');
            }
            // verify required parameter 'recordType' is not null or undefined
            if (recordType === null || recordType === undefined) {
                throw new RequiredError('recordType','Required parameter recordType was null or undefined when calling deleteZoneRecord.');
            }
            const localVarPath = `/account/{accountId}/zone/{zoneName}/{recordName}/{recordType}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"zoneName"}}`, encodeURIComponent(String(zoneName)))
                .replace(`{${"recordName"}}`, encodeURIComponent(String(recordName)))
                .replace(`{${"recordType"}}`, encodeURIComponent(String(recordType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required

            // authentication keyInQuery required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Enable Section Hosted DNS for the environment's domain
         * @param {Body3} body 
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableHostedDNS: async (body: Body3, accountId: number, applicationId: number, environmentName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling enableHostedDNS.');
            }
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling enableHostedDNS.');
            }
            // verify required parameter 'applicationId' is not null or undefined
            if (applicationId === null || applicationId === undefined) {
                throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling enableHostedDNS.');
            }
            // verify required parameter 'environmentName' is not null or undefined
            if (environmentName === null || environmentName === undefined) {
                throw new RequiredError('environmentName','Required parameter environmentName was null or undefined when calling enableHostedDNS.');
            }
            const localVarPath = `/account/{accountId}/application/{applicationId}/environment/{environmentName}/enableHostedDNS`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)))
                .replace(`{${"environmentName"}}`, encodeURIComponent(String(environmentName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required

            // authentication keyInQuery required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Find likely zone for domain
         * @param {number} accountId The account identifier number
         * @param {string} hostName Host Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDomainZone: async (accountId: number, hostName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling getDomainZone.');
            }
            // verify required parameter 'hostName' is not null or undefined
            if (hostName === null || hostName === undefined) {
                throw new RequiredError('hostName','Required parameter hostName was null or undefined when calling getDomainZone.');
            }
            const localVarPath = `/account/{accountId}/domain/{hostName}/zone`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"hostName"}}`, encodeURIComponent(String(hostName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required

            // authentication keyInQuery required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get details of a zone
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getZoneDetail: async (accountId: number, zoneName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling getZoneDetail.');
            }
            // verify required parameter 'zoneName' is not null or undefined
            if (zoneName === null || zoneName === undefined) {
                throw new RequiredError('zoneName','Required parameter zoneName was null or undefined when calling getZoneDetail.');
            }
            const localVarPath = `/account/{accountId}/zone/{zoneName}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"zoneName"}}`, encodeURIComponent(String(zoneName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required

            // authentication keyInQuery required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * List all zones for account
         * @param {number} accountId The account identifier number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getZones: async (accountId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling getZones.');
            }
            const localVarPath = `/account/{accountId}/zone`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required

            // authentication keyInQuery required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Add or update a record for a zone
         * @param {Body1} body 
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postZoneRecord: async (body: Body1, accountId: number, zoneName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postZoneRecord.');
            }
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling postZoneRecord.');
            }
            // verify required parameter 'zoneName' is not null or undefined
            if (zoneName === null || zoneName === undefined) {
                throw new RequiredError('zoneName','Required parameter zoneName was null or undefined when calling postZoneRecord.');
            }
            const localVarPath = `/account/{accountId}/zone/{zoneName}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"zoneName"}}`, encodeURIComponent(String(zoneName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required

            // authentication keyInQuery required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ZoneApi - functional programming interface
 * @export
 */
export const ZoneApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a record from a zone
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {string} recordName Record Name
         * @param {string} recordType Record Type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteZoneRecord(accountId: number, zoneName: string, recordName: string, recordType: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ZoneDetail>> {
            const localVarAxiosArgs = await ZoneApiAxiosParamCreator(configuration).deleteZoneRecord(accountId, zoneName, recordName, recordType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Enable Section Hosted DNS for the environment's domain
         * @param {Body3} body 
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enableHostedDNS(body: Body3, accountId: number, applicationId: number, environmentName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ZoneSummary>> {
            const localVarAxiosArgs = await ZoneApiAxiosParamCreator(configuration).enableHostedDNS(body, accountId, applicationId, environmentName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Find likely zone for domain
         * @param {number} accountId The account identifier number
         * @param {string} hostName Host Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDomainZone(accountId: number, hostName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ZoneCandidate>> {
            const localVarAxiosArgs = await ZoneApiAxiosParamCreator(configuration).getDomainZone(accountId, hostName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get details of a zone
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getZoneDetail(accountId: number, zoneName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ZoneDetail>> {
            const localVarAxiosArgs = await ZoneApiAxiosParamCreator(configuration).getZoneDetail(accountId, zoneName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List all zones for account
         * @param {number} accountId The account identifier number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getZones(accountId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ZoneSummary>>> {
            const localVarAxiosArgs = await ZoneApiAxiosParamCreator(configuration).getZones(accountId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Add or update a record for a zone
         * @param {Body1} body 
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postZoneRecord(body: Body1, accountId: number, zoneName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ZoneDetail>> {
            const localVarAxiosArgs = await ZoneApiAxiosParamCreator(configuration).postZoneRecord(body, accountId, zoneName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ZoneApi - factory interface
 * @export
 */
export const ZoneApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a record from a zone
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {string} recordName Record Name
         * @param {string} recordType Record Type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteZoneRecord(accountId: number, zoneName: string, recordName: string, recordType: string, options?: any): AxiosPromise<ZoneDetail> {
            return ZoneApiFp(configuration).deleteZoneRecord(accountId, zoneName, recordName, recordType, options).then((request) => request(axios, basePath));
        },
        /**
         * Enable Section Hosted DNS for the environment's domain
         * @param {Body3} body 
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableHostedDNS(body: Body3, accountId: number, applicationId: number, environmentName: string, options?: any): AxiosPromise<ZoneSummary> {
            return ZoneApiFp(configuration).enableHostedDNS(body, accountId, applicationId, environmentName, options).then((request) => request(axios, basePath));
        },
        /**
         * Find likely zone for domain
         * @param {number} accountId The account identifier number
         * @param {string} hostName Host Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDomainZone(accountId: number, hostName: string, options?: any): AxiosPromise<ZoneCandidate> {
            return ZoneApiFp(configuration).getDomainZone(accountId, hostName, options).then((request) => request(axios, basePath));
        },
        /**
         * Get details of a zone
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getZoneDetail(accountId: number, zoneName: string, options?: any): AxiosPromise<ZoneDetail> {
            return ZoneApiFp(configuration).getZoneDetail(accountId, zoneName, options).then((request) => request(axios, basePath));
        },
        /**
         * List all zones for account
         * @param {number} accountId The account identifier number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getZones(accountId: number, options?: any): AxiosPromise<Array<ZoneSummary>> {
            return ZoneApiFp(configuration).getZones(accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * Add or update a record for a zone
         * @param {Body1} body 
         * @param {number} accountId The account identifier number
         * @param {string} zoneName Zone Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postZoneRecord(body: Body1, accountId: number, zoneName: string, options?: any): AxiosPromise<ZoneDetail> {
            return ZoneApiFp(configuration).postZoneRecord(body, accountId, zoneName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ZoneApi - object-oriented interface
 * @export
 * @class ZoneApi
 * @extends {BaseAPI}
 */
export class ZoneApi extends BaseAPI {
    /**
     * Delete a record from a zone
     * @param {number} accountId The account identifier number
     * @param {string} zoneName Zone Name
     * @param {string} recordName Record Name
     * @param {string} recordType Record Type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneApi
     */
    public deleteZoneRecord(accountId: number, zoneName: string, recordName: string, recordType: string, options?: any) {
        return ZoneApiFp(this.configuration).deleteZoneRecord(accountId, zoneName, recordName, recordType, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Enable Section Hosted DNS for the environment's domain
     * @param {Body3} body 
     * @param {number} accountId The account identifier number
     * @param {number} applicationId The application identifier number
     * @param {string} environmentName The name of the environment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneApi
     */
    public enableHostedDNS(body: Body3, accountId: number, applicationId: number, environmentName: string, options?: any) {
        return ZoneApiFp(this.configuration).enableHostedDNS(body, accountId, applicationId, environmentName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Find likely zone for domain
     * @param {number} accountId The account identifier number
     * @param {string} hostName Host Name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneApi
     */
    public getDomainZone(accountId: number, hostName: string, options?: any) {
        return ZoneApiFp(this.configuration).getDomainZone(accountId, hostName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get details of a zone
     * @param {number} accountId The account identifier number
     * @param {string} zoneName Zone Name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneApi
     */
    public getZoneDetail(accountId: number, zoneName: string, options?: any) {
        return ZoneApiFp(this.configuration).getZoneDetail(accountId, zoneName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * List all zones for account
     * @param {number} accountId The account identifier number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneApi
     */
    public getZones(accountId: number, options?: any) {
        return ZoneApiFp(this.configuration).getZones(accountId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Add or update a record for a zone
     * @param {Body1} body 
     * @param {number} accountId The account identifier number
     * @param {string} zoneName Zone Name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneApi
     */
    public postZoneRecord(body: Body1, accountId: number, zoneName: string, options?: any) {
        return ZoneApiFp(this.configuration).postZoneRecord(body, accountId, zoneName, options).then((request) => request(this.axios, this.basePath));
    }
}
