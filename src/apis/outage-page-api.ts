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
import { ErrorModel } from '../models';
import { OutagePage } from '../models';
/**
 * OutagePageApi - axios parameter creator
 * @export
 */
export const OutagePageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Disengage the outage page for the specified environment
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        outagePageDelete: async (accountId: number, applicationId: number, environmentName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling outagePageDelete.');
            }
            // verify required parameter 'applicationId' is not null or undefined
            if (applicationId === null || applicationId === undefined) {
                throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling outagePageDelete.');
            }
            // verify required parameter 'environmentName' is not null or undefined
            if (environmentName === null || environmentName === undefined) {
                throw new RequiredError('environmentName','Required parameter environmentName was null or undefined when calling outagePageDelete.');
            }
            const localVarPath = `/account/{accountId}/application/{applicationId}/environment/{environmentName}/outagepage`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)))
                .replace(`{${"environmentName"}}`, encodeURIComponent(String(environmentName)));
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
         * Lists the available outage pages
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        outagePageGet: async (accountId: number, applicationId: number, environmentName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling outagePageGet.');
            }
            // verify required parameter 'applicationId' is not null or undefined
            if (applicationId === null || applicationId === undefined) {
                throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling outagePageGet.');
            }
            // verify required parameter 'environmentName' is not null or undefined
            if (environmentName === null || environmentName === undefined) {
                throw new RequiredError('environmentName','Required parameter environmentName was null or undefined when calling outagePageGet.');
            }
            const localVarPath = `/account/{accountId}/application/{applicationId}/environment/{environmentName}/outagepage`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)))
                .replace(`{${"environmentName"}}`, encodeURIComponent(String(environmentName)));
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
         * Engage the specified outage page
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {string} pageName Name of the outage page to engage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        outagePagePost: async (accountId: number, applicationId: number, environmentName: string, pageName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling outagePagePost.');
            }
            // verify required parameter 'applicationId' is not null or undefined
            if (applicationId === null || applicationId === undefined) {
                throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling outagePagePost.');
            }
            // verify required parameter 'environmentName' is not null or undefined
            if (environmentName === null || environmentName === undefined) {
                throw new RequiredError('environmentName','Required parameter environmentName was null or undefined when calling outagePagePost.');
            }
            // verify required parameter 'pageName' is not null or undefined
            if (pageName === null || pageName === undefined) {
                throw new RequiredError('pageName','Required parameter pageName was null or undefined when calling outagePagePost.');
            }
            const localVarPath = `/account/{accountId}/application/{applicationId}/environment/{environmentName}/outagepage`
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

            if (pageName !== undefined) {
                localVarQueryParameter['pageName'] = pageName;
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
    }
};

/**
 * OutagePageApi - functional programming interface
 * @export
 */
export const OutagePageApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Disengage the outage page for the specified environment
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async outagePageDelete(accountId: number, applicationId: number, environmentName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await OutagePageApiAxiosParamCreator(configuration).outagePageDelete(accountId, applicationId, environmentName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists the available outage pages
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async outagePageGet(accountId: number, applicationId: number, environmentName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OutagePage>>> {
            const localVarAxiosArgs = await OutagePageApiAxiosParamCreator(configuration).outagePageGet(accountId, applicationId, environmentName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Engage the specified outage page
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {string} pageName Name of the outage page to engage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async outagePagePost(accountId: number, applicationId: number, environmentName: string, pageName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await OutagePageApiAxiosParamCreator(configuration).outagePagePost(accountId, applicationId, environmentName, pageName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OutagePageApi - factory interface
 * @export
 */
export const OutagePageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Disengage the outage page for the specified environment
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        outagePageDelete(accountId: number, applicationId: number, environmentName: string, options?: any): AxiosPromise<void> {
            return OutagePageApiFp(configuration).outagePageDelete(accountId, applicationId, environmentName, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the available outage pages
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        outagePageGet(accountId: number, applicationId: number, environmentName: string, options?: any): AxiosPromise<Array<OutagePage>> {
            return OutagePageApiFp(configuration).outagePageGet(accountId, applicationId, environmentName, options).then((request) => request(axios, basePath));
        },
        /**
         * Engage the specified outage page
         * @param {number} accountId The account identifier number
         * @param {number} applicationId The application identifier number
         * @param {string} environmentName The name of the environment
         * @param {string} pageName Name of the outage page to engage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        outagePagePost(accountId: number, applicationId: number, environmentName: string, pageName: string, options?: any): AxiosPromise<void> {
            return OutagePageApiFp(configuration).outagePagePost(accountId, applicationId, environmentName, pageName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OutagePageApi - object-oriented interface
 * @export
 * @class OutagePageApi
 * @extends {BaseAPI}
 */
export class OutagePageApi extends BaseAPI {
    /**
     * Disengage the outage page for the specified environment
     * @param {number} accountId The account identifier number
     * @param {number} applicationId The application identifier number
     * @param {string} environmentName The name of the environment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutagePageApi
     */
    public outagePageDelete(accountId: number, applicationId: number, environmentName: string, options?: any) {
        return OutagePageApiFp(this.configuration).outagePageDelete(accountId, applicationId, environmentName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists the available outage pages
     * @param {number} accountId The account identifier number
     * @param {number} applicationId The application identifier number
     * @param {string} environmentName The name of the environment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutagePageApi
     */
    public outagePageGet(accountId: number, applicationId: number, environmentName: string, options?: any) {
        return OutagePageApiFp(this.configuration).outagePageGet(accountId, applicationId, environmentName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Engage the specified outage page
     * @param {number} accountId The account identifier number
     * @param {number} applicationId The application identifier number
     * @param {string} environmentName The name of the environment
     * @param {string} pageName Name of the outage page to engage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutagePageApi
     */
    public outagePagePost(accountId: number, applicationId: number, environmentName: string, pageName: string, options?: any) {
        return OutagePageApiFp(this.configuration).outagePagePost(accountId, applicationId, environmentName, pageName, options).then((request) => request(this.axios, this.basePath));
    }
}
