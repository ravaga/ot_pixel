# Otpixel.EventLogItemResourceApi

All URIs are relative to *https://otpixel.satrdlab.upv.es/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEventLogItem**](EventLogItemResourceApi.md#createEventLogItem) | **PUT** /eventLogItem/create | Create an eventLogItem
[**deleteEventLogItem**](EventLogItemResourceApi.md#deleteEventLogItem) | **DELETE** /eventLogItem/delete/{id} | Delete an EventLogItem
[**getEventLogItemByID**](EventLogItemResourceApi.md#getEventLogItemByID) | **GET** /eventLogItem/get/{id} | Get an eventLogItem by id
[**listEventLogItem**](EventLogItemResourceApi.md#listEventLogItem) | **GET** /eventLogItem/list | List all eventLogItems
[**updateEventLogItem**](EventLogItemResourceApi.md#updateEventLogItem) | **POST** /eventLogItem/update | Update an EeventLogItem


<a name="createEventLogItem"></a>
# **createEventLogItem**
> EventLogItem createEventLogItem(body)

Create an eventLogItem

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

var apiInstance = new Otpixel.EventLogItemResourceApi();

var body = new Otpixel.EventLogItem(); // EventLogItem | eventLogItem description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEventLogItem(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EventLogItem**](EventLogItem.md)| eventLogItem description | 

### Return type

[**EventLogItem**](EventLogItem.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEventLogItem"></a>
# **deleteEventLogItem**
> deleteEventLogItem(id)

Delete an EventLogItem



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.EventLogItemResourceApi();

var id = "id_example"; // String | ID of eventLogItem


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEventLogItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of eventLogItem | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getEventLogItemByID"></a>
# **getEventLogItemByID**
> EventLogItem getEventLogItemByID(id)

Get an eventLogItem by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.EventLogItemResourceApi();

var id = "id_example"; // String | eventLogItem


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEventLogItemByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| eventLogItem | 

### Return type

[**EventLogItem**](EventLogItem.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listEventLogItem"></a>
# **listEventLogItem**
> [EventLogItem] listEventLogItem(opts)

List all eventLogItems



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.EventLogItemResourceApi();

var opts = { 
  'category': "category_example" // String | category
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listEventLogItem(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| category | [optional] 

### Return type

[**[EventLogItem]**](EventLogItem.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateEventLogItem"></a>
# **updateEventLogItem**
> EventLogItem updateEventLogItem(body)

Update an EeventLogItem



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.EventLogItemResourceApi();

var body = new Otpixel.EventLogItem(); // EventLogItem | eventLogItem description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEventLogItem(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EventLogItem**](EventLogItem.md)| eventLogItem description | 

### Return type

[**EventLogItem**](EventLogItem.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

