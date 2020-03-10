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
    describe('KpiOperationScheduled', function() {
      beforeEach(function() {
        instance = new Otpixel.KpiOperationScheduled();
      });

      it('should create an instance of KpiOperationScheduled', function() {
        // TODO: update the code to test KpiOperationScheduled
        expect(instance).to.be.a(Otpixel.KpiOperationScheduled);
      });

      it('should have the property idRef (base name: "idRef")', function() {
        // TODO: update the code to test the property idRef
        expect(instance).to.have.property('idRef');
        // expect(instance.idRef).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property searchforValue (base name: "searchforValue")', function() {
        // TODO: update the code to test the property searchforValue
        expect(instance).to.have.property('searchforValue');
        // expect(instance.searchforValue).to.be(expectedValueLiteral);
      });

    });
  });

}));
