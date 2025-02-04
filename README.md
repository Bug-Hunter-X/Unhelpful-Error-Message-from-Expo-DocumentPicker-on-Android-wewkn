# Unhelpful Error Message from Expo DocumentPicker on Android

This repository demonstrates a bug in the Expo DocumentPicker API on Android.  When using `DocumentPicker.getDocumentAsync()`, the promise sometimes rejects without a helpful error message, making debugging difficult.

## Bug Description
The `DocumentPicker.getDocumentAsync()` method on Android sometimes returns a rejected promise with a generic error message, such as 'Promise rejection'. This lack of specific information makes it challenging to identify the root cause and implement proper error handling.

## Reproduction
1. Run the provided `bug.js` example on an Android device.
2. Attempt to select a file using the DocumentPicker.
3. Observe that the promise sometimes rejects with a non-descriptive error.

## Solution
The `bugSolution.js` file demonstrates a workaround that uses a `try...catch` block to improve error handling.  While it does not resolve the underlying issue, it allows for better management of the unexpected rejection.