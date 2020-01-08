# Otpixel.PredictiveAlgorithmResourceApi

All URIs are relative to *https://otpixel.satrdlab.upv.es/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPredictiveAlgorithm**](PredictiveAlgorithmResourceApi.md#createPredictiveAlgorithm) | **PUT** /predictiveAlgorithms/create | Create a predictive algorithm
[**deletePredictiveAlgorithm**](PredictiveAlgorithmResourceApi.md#deletePredictiveAlgorithm) | **DELETE** /predictiveAlgorithms/delete/{id} | Delete a predictive algorithm
[**executePredictiveAlgorithm**](PredictiveAlgorithmResourceApi.md#executePredictiveAlgorithm) | **POST** /predictiveAlgorithms/execute/{id} | Execute a preditive algorithm by id
[**getPredictiveAlgorithm**](PredictiveAlgorithmResourceApi.md#getPredictiveAlgorithm) | **GET** /predictiveAlgorithms/get/{id} | Get a predictive algorithm by id
[**getPredictiveAlgorithmInfo**](PredictiveAlgorithmResourceApi.md#getPredictiveAlgorithmInfo) | **GET** /predictiveAlgorithms/get/{id}/info | Get the status of a predictive algorithm by id
[**getPredictiveAlgorithmStatus**](PredictiveAlgorithmResourceApi.md#getPredictiveAlgorithmStatus) | **GET** /predictiveAlgorithms/get/{id}/status | Get the status of a predictive algorithm by id
[**listPredictiveAlgorithms**](PredictiveAlgorithmResourceApi.md#listPredictiveAlgorithms) | **GET** /predictiveAlgorithms/list | List all predictive algorithms
[**updatePredictiveAlgorithm**](PredictiveAlgorithmResourceApi.md#updatePredictiveAlgorithm) | **POST** /predictiveAlgorithms/update | Update a predictive algorithm


<a name="createPredictiveAlgorithm"></a>
# **createPredictiveAlgorithm**
> PredictiveAlgorithm createPredictiveAlgorithm(body)

Create a predictive algorithm

If id is not provided, it will be randomly generated

### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.PredictiveAlgorithmResourceApi();

var body = new Otpixel.PredictiveAlgorithm(); // PredictiveAlgorithm | Predictive algorithm description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPredictiveAlgorithm(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PredictiveAlgorithm**](PredictiveAlgorithm.md)| Predictive algorithm description | 

### Return type

[**PredictiveAlgorithm**](PredictiveAlgorithm.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePredictiveAlgorithm"></a>
# **deletePredictiveAlgorithm**
> deletePredictiveAlgorithm(id)

Delete a predictive algorithm



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.PredictiveAlgorithmResourceApi();

var id = "id_example"; // String | ID of predictive algorithm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePredictiveAlgorithm(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of predictive algorithm | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="executePredictiveAlgorithm"></a>
# **executePredictiveAlgorithm**
> executePredictiveAlgorithm(id, body)

Execute a preditive algorithm by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.PredictiveAlgorithmResourceApi();

var id = "id_example"; // String | Predictive Algorithm

var body = new Otpixel.JsonNode(); // JsonNode | Input body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.executePredictiveAlgorithm(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Predictive Algorithm | 
 **body** | [**JsonNode**](JsonNode.md)| Input body | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPredictiveAlgorithm"></a>
# **getPredictiveAlgorithm**
> PredictiveAlgorithm getPredictiveAlgorithm(id)

Get a predictive algorithm by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.PredictiveAlgorithmResourceApi();

var id = "id_example"; // String | predictive algorithm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPredictiveAlgorithm(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| predictive algorithm | 

### Return type

[**PredictiveAlgorithm**](PredictiveAlgorithm.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPredictiveAlgorithmInfo"></a>
# **getPredictiveAlgorithmInfo**
> JsonNode getPredictiveAlgorithmInfo(id)

Get the status of a predictive algorithm by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.PredictiveAlgorithmResourceApi();

var id = "id_example"; // String | predictive algorithm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPredictiveAlgorithmInfo(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| predictive algorithm | 

### Return type

[**JsonNode**](JsonNode.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPredictiveAlgorithmStatus"></a>
# **getPredictiveAlgorithmStatus**
> JsonNode getPredictiveAlgorithmStatus(id)

Get the status of a predictive algorithm by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.PredictiveAlgorithmResourceApi();

var id = "id_example"; // String | predictive algorithm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPredictiveAlgorithmStatus(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| predictive algorithm | 

### Return type

[**JsonNode**](JsonNode.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPredictiveAlgorithms"></a>
# **listPredictiveAlgorithms**
> [PredictiveAlgorithm] listPredictiveAlgorithms(opts)

List all predictive algorithms



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.PredictiveAlgorithmResourceApi();

var opts = { 
  'status': "status_example" // String | status
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPredictiveAlgorithms(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| status | [optional] 

### Return type

[**[PredictiveAlgorithm]**](PredictiveAlgorithm.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePredictiveAlgorithm"></a>
# **updatePredictiveAlgorithm**
> PredictiveAlgorithm updatePredictiveAlgorithm(body)

Update a predictive algorithm



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.PredictiveAlgorithmResourceApi();

var body = new Otpixel.PredictiveAlgorithm(); // PredictiveAlgorithm | Predictive algorithm description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePredictiveAlgorithm(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PredictiveAlgorithm**](PredictiveAlgorithm.md)| Predictive algorithm description | 

### Return type

[**PredictiveAlgorithm**](PredictiveAlgorithm.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

