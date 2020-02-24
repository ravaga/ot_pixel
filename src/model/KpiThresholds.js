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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.KpiThresholds = factory(root.Otpixel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The KpiThresholds model module.
   * @module model/KpiThresholds
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>KpiThresholds</code>.
   * @alias module:model/KpiThresholds
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KpiThresholds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KpiThresholds} obj Optional instance to populate.
   * @return {module:model/KpiThresholds} The populated <code>KpiThresholds</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lowerThres'))
        obj.lowerThres = ApiClient.convertToType(data['lowerThres'], 'Number');
      if (data.hasOwnProperty('upperThres'))
        obj.upperThres = ApiClient.convertToType(data['upperThres'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} lowerThres
   */
  exports.prototype.lowerThres = undefined;

  /**
   * @member {Number} upperThres
   */
  exports.prototype.upperThres = undefined;

  return exports;

}));
