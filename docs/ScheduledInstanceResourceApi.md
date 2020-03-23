# Otpixel.ScheduledInstanceResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/otpixel/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createScheduledInstance**](ScheduledInstanceResourceApi.md#createScheduledInstance) | **PUT** /scheduledInstances/create | Create a scheduled instance
[**deleteScheduledInstance**](ScheduledInstanceResourceApi.md#deleteScheduledInstance) | **DELETE** /scheduledInstances/delete/{id} | Delete a scheduled instance
[**getScheduledInstance**](ScheduledInstanceResourceApi.md#getScheduledInstance) | **GET** /scheduledInstances/get/{id} | Get a scheduled instance by id
[**listScheduledInstances**](ScheduledInstanceResourceApi.md#listScheduledInstances) | **GET** /scheduledInstances/list | List all scheduled instances
[**updateScheduledInstance**](ScheduledInstanceResourceApi.md#updateScheduledInstance) | **POST** /scheduledInstances/update | Update a scheduled instance
[**updateStatusScheduledInstance**](ScheduledInstanceResourceApi.md#updateStatusScheduledInstance) | **POST** /scheduledInstances/updateStatus/{id} | Update only the status of a scheduled instance


<a name="createScheduledInstance"></a>
# **createScheduledInstance**
> Instance createScheduledInstance(body)

Create a scheduled instance

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

var apiInstance = new Otpixel.ScheduledInstanceResourceApi();

var body = new Otpixel.ScheduledInstance(); // ScheduledInstance | Scheduled instance description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createScheduledInstance(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScheduledInstance**](ScheduledInstance.md)| Scheduled instance description | 

### Return type

[**Instance**](Instance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteScheduledInstance"></a>
# **deleteScheduledInstance**
> deleteScheduledInstance(id)

Delete a scheduled instance



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ScheduledInstanceResourceApi();

var id = "id_example"; // String | ID of scheduled instance


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteScheduledInstance(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of scheduled instance | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getScheduledInstance"></a>
# **getScheduledInstance**
> ScheduledInstance getScheduledInstance(id)

Get a scheduled instance by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ScheduledInstanceResourceApi();

var id = "id_example"; // String | scheduled instance


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScheduledInstance(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| scheduled instance | 

### Return type

[**ScheduledInstance**](ScheduledInstance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listScheduledInstances"></a>
# **listScheduledInstances**
> [ScheduledInstance] listScheduledInstances(opts)

List all scheduled instances



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ScheduledInstanceResourceApi();

var opts = { 
  'idRef': "idRef_example", // String | idRef
  'user': "user_example", // String | user
  'status': "status_example" // String | status
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listScheduledInstances(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idRef** | **String**| idRef | [optional] 
 **user** | **String**| user | [optional] 
 **status** | **String**| status | [optional] 

### Return type

[**[ScheduledInstance]**](ScheduledInstance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateScheduledInstance"></a>
# **updateScheduledInstance**
> ScheduledInstance updateScheduledInstance(body)

Update a scheduled instance



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ScheduledInstanceResourceApi();

var body = new Otpixel.ScheduledInstance(); // ScheduledInstance | Scheduled instance description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateScheduledInstance(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScheduledInstance**](ScheduledInstance.md)| Scheduled instance description | 

### Return type

[**ScheduledInstance**](ScheduledInstance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStatusScheduledInstance"></a>
# **updateStatusScheduledInstance**
> ScheduledInstance updateStatusScheduledInstance(id, status)

Update only the status of a scheduled instance



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ScheduledInstanceResourceApi();

var id = "id_example"; // String | ID of scheduled instance

var status = "status_example"; // String | status


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateStatusScheduledInstance(id, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of scheduled instance | 
 **status** | **String**| status | 

### Return type

[**ScheduledInstance**](ScheduledInstance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

