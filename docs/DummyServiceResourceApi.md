# Otpixel.DummyServiceResourceApi

All URIs are relative to *https://otpixel.satrdlab.upv.es/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDummyService**](DummyServiceResourceApi.md#getDummyService) | **GET** /dummyService/get | Get dummy JSON response
[**postDummyService**](DummyServiceResourceApi.md#postDummyService) | **POST** /dummyService/post | Obtain dummy echo JSON


<a name="getDummyService"></a>
# **getDummyService**
> DummyJSON getDummyService()

Get dummy JSON response



### Example
```javascript
var Otpixel = require('otpixel');

var apiInstance = new Otpixel.DummyServiceResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDummyService(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DummyJSON**](DummyJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postDummyService"></a>
# **postDummyService**
> Object postDummyService(body)

Obtain dummy echo JSON



### Example
```javascript
var Otpixel = require('otpixel');

var apiInstance = new Otpixel.DummyServiceResourceApi();

var body = new Otpixel.JsonNode(); // JsonNode | JSON input


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postDummyService(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JsonNode**](JsonNode.md)| JSON input | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

