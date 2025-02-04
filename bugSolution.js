```javascript
try {
  const result = await DocumentPicker.getDocumentAsync({});
  if (result.type === 'cancel') {
    console.log('User cancelled');
  } else if (result.error) {
    console.error('Error selecting document:', result.error);
  } else {
    console.log('Selected file:', result.uri);
  }
} catch (error) {
  console.error('An unexpected error occurred:', error);
}
```