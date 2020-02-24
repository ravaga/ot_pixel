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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Otpixel);
  }
}(this, function(expect, Otpixel) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('KpiThresholds', function() {
      beforeEach(function() {
        instance = new Otpixel.KpiThresholds();
      });

      it('should create an instance of KpiThresholds', function() {
        // TODO: update the code to test KpiThresholds
        expect(instance).to.be.a(Otpixel.KpiThresholds);
      });

      it('should have the property lowerThres (base name: "lowerThres")', function() {
        // TODO: update the code to test the property lowerThres
        expect(instance).to.have.property('lowerThres');
        // expect(instance.lowerThres).to.be(expectedValueLiteral);
      });

      it('should have the property upperThres (base name: "upperThres")', function() {
        // TODO: update the code to test the property upperThres
        expect(instance).to.have.property('upperThres');
        // expect(instance.upperThres).to.be(expectedValueLiteral);
      });

    });
  });

}));
