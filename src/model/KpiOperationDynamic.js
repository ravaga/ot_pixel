/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.5
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
    define(['ApiClient', 'model/InputEndpoint'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InputEndpoint'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.KpiOperationDynamic = factory(root.Otpixel.ApiClient, root.Otpixel.InputEndpoint);
  }
}(this, function(ApiClient, InputEndpoint) {
  'use strict';

  /**
   * The KpiOperationDynamic model module.
   * @module model/KpiOperationDynamic
   * @version 0.5
   */

  /**
   * Constructs a new <code>KpiOperationDynamic</code>.
   * @alias module:model/KpiOperationDynamic
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KpiOperationDynamic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KpiOperationDynamic} obj Optional instance to populate.
   * @return {module:model/KpiOperationDynamic} The populated <code>KpiOperationDynamic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('inputEndpoint'))
        obj.inputEndpoint = InputEndpoint.constructFromObject(data['inputEndpoint']);
      if (data.hasOwnProperty('searchforValue'))
        obj.searchforValue = ApiClient.convertToType(data['searchforValue'], 'String');
      if (data.hasOwnProperty('serchforTimeStampUnix'))
        obj.serchforTimeStampUnix = ApiClient.convertToType(data['serchforTimeStampUnix'], 'String');
      if (data.hasOwnProperty('searchforTimeStampIso8601'))
        obj.searchforTimeStampIso8601 = ApiClient.convertToType(data['searchforTimeStampIso8601'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/InputEndpoint} inputEndpoint
   */
  exports.prototype.inputEndpoint = undefined;

  /**
   * @member {String} searchforValue
   */
  exports.prototype.searchforValue = undefined;

  /**
   * @member {String} serchforTimeStampUnix
   */
  exports.prototype.serchforTimeStampUnix = undefined;

  /**
   * @member {String} searchforTimeStampIso8601
   */
  exports.prototype.searchforTimeStampIso8601 = undefined;

  return exports;

}));
