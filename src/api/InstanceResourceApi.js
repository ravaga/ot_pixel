/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Instance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Instance'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.InstanceResourceApi = factory(root.Otpixel.ApiClient, root.Otpixel.Instance);
  }
}(this, function(ApiClient, Instance) {
  'use strict';

  /**
   * InstanceResource service.
   * @module api/InstanceResourceApi
   * @version 0.0.1
   */

  /**
   * Constructs a new InstanceResourceApi. 
   * @alias module:api/InstanceResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createInstance operation.
     * @callback module:api/InstanceResourceApi~createInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Instance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an instance
     * If id is not provided, it will be randomly generated
     * @param {module:model/Instance} body Instance description
     * @param {module:api/InstanceResourceApi~createInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Instance}
     */
    this.createInstance = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createInstance");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Instance;

      return this.apiClient.callApi(
        '/instances/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInstance operation.
     * @callback module:api/InstanceResourceApi~deleteInstanceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an instance
     * 
     * @param {String} id ID of instance
     * @param {module:api/InstanceResourceApi~deleteInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInstance = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteInstance");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/instances/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstance operation.
     * @callback module:api/InstanceResourceApi~getInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Instance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an instance by id
     * 
     * @param {String} id instance
     * @param {module:api/InstanceResourceApi~getInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Instance}
     */
    this.getInstance = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInstance");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Instance;

      return this.apiClient.callApi(
        '/instances/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listInstances operation.
     * @callback module:api/InstanceResourceApi~listInstancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Instance>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all instances
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.idRef idRef
     * @param {String} opts.type user
     * @param {String} opts.status status
     * @param {module:api/InstanceResourceApi~listInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Instance>}
     */
    this.listInstances = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idRef': opts['idRef'],
        'type': opts['type'],
        'status': opts['status'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Instance];

      return this.apiClient.callApi(
        '/instances/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInstance operation.
     * @callback module:api/InstanceResourceApi~updateInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Instance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an instance
     * 
     * @param {module:model/Instance} body Instance description
     * @param {module:api/InstanceResourceApi~updateInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Instance}
     */
    this.updateInstance = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateInstance");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Instance;

      return this.apiClient.callApi(
        '/instances/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
