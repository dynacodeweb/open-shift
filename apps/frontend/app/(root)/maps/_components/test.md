i want to build a address autofill with confirmation of selected address in react how to do that

You can do this in React using the `@mapbox/search-js-react` package, combining:

- `AddressAutofill` – for suggestions and form fill
- `useConfirmAddress` – for the confirmation dialog
- (Optionally) `AddressMinimap` – to show the selected location on a small map

### 1. Install the React SDK

```bash
npm install --save @mapbox/search-js-react
```

[[Autofill React guide](https://docs.mapbox.com/mapbox-search-js/guides/autofill/react/)]

### 2. Basic React example: Autofill + confirmation

```jsx
import React, { useState, useCallback } from 'react';
import { AddressAutofill, useConfirmAddress } from '@mapbox/search-js-react';

const ACCESS_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MyAddressForm = () => {
  const [formData, setFormData] = useState(null);

  // Hook that wires up the confirmation dialog
  const { formRef, showConfirm } = useConfirmAddress({
    accessToken: ACCESS_TOKEN,
  }); // [[React confirm guide](https://docs.mapbox.com/mapbox-search-js/guides/autofill/react/#address-confirmation)]

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const result = await showConfirm();

      if (result.type === 'nochange') {
        // user kept their original address
        setFormData(new FormData(e.target));
        // submitForm(); // your submit logic
      }

      if (result.type === 'change') {
        // user chose a better match in the dialog
        // result.feature contains the standardized address feature
        // submitFormWithChanges(result.feature); // your submit logic
      }

      if (result.type === 'cancel') {
        // user closed the dialog; do nothing or show a message
      }
    },
    [showConfirm],
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* Wrap your address inputs in AddressAutofill */}
      <AddressAutofill accessToken={ACCESS_TOKEN}>
        <input
          type='text'
          name='address-line1'
          autoComplete='address-line1'
          placeholder='Street address'
          required
        />
        <input
          type='text'
          name='address-line2'
          autoComplete='address-line2'
          placeholder='Apartment, suite, etc.'
        />
        <input
          type='text'
          name='city'
          autoComplete='address-level2'
          placeholder='City'
          required
        />
        <input
          type='text'
          name='state'
          autoComplete='address-level1'
          placeholder='State / Region'
          required
        />
        <input
          type='text'
          name='postal-code'
          autoComplete='postal-code'
          placeholder='ZIP / Postcode'
          required
        />
      </AddressAutofill>

      <button type='submit'>Confirm address</button>
    </form>
  );
};

export default MyAddressForm;
```

This follows the pattern from the React Autofill quickstart and confirmation guide, where `AddressAutofill` wraps inputs with proper `autocomplete` attributes and `useConfirmAddress` provides `formRef` and `showConfirm()` for the confirmation step.[[Autofill React guide](https://docs.mapbox.com/mapbox-search-js/guides/autofill/react/); [React confirm guide](https://docs.mapbox.com/mapbox-search-js/guides/autofill/react/#address-confirmation)]

### 3. Add a minimap (optional but common)

To show a small map when a suggestion is chosen, use `AddressMinimap` and the `onRetrieve` callback, as in the checkout example:

```jsx
import {
  AddressAutofill,
  AddressMinimap,
  useConfirmAddress,
} from '@mapbox/search-js-react';

const ACCESS_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MyAddressFormWithMap = () => {
  const [minimapFeature, setMinimapFeature] = useState();
  const { formRef, showConfirm } = useConfirmAddress({
    accessToken: ACCESS_TOKEN,
  });

  const handleAutofillRetrieve = (response) => {
    console.log('onRetrieve fired', response);
    setMinimapFeature(response.features[0]);
  }; // [[React checkout example](https://docs.mapbox.com/mapbox-search-js/example/autofill-checkout-react/)]

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await showConfirm();
      if (result.type === 'nochange') {
        // proceed with original address
      }
      if (result.type === 'change') {
        // use result.feature
      }
    },
    [showConfirm],
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <AddressAutofill
        accessToken={ACCESS_TOKEN}
        onRetrieve={handleAutofillRetrieve}>
        <input name='address-line1' autoComplete='address-line1' required />
        {/* other inputs as above */}
      </AddressAutofill>

      {minimapFeature && (
        <div style={{ height: 180, width: '100%', marginTop: 18 }}>
          <AddressMinimap
            feature={minimapFeature}
            show
            satelliteToggle
            canAdjustMarker
            footer
            accessToken={ACCESS_TOKEN}
          />
        </div>
      )}

      <button type='submit'>Confirm address</button>
    </form>
  );
};
```

This mirrors the official “Autofill Checkout (React)” example, which combines `AddressAutofill`, `AddressMinimap`, and `useConfirmAddress` into a full flow.[[React checkout example](https://docs.mapbox.com/mapbox-search-js/example/autofill-checkout-react/)]

If you tell me what UI/flow you want (e.g., single-page checkout vs. multi-step), I can adapt this snippet to match it more closely.

```typescript
const options: AddressAutofillOptions = {
  language: 'en',
  country: 'au',
  // bbox: [west, south, east, north]
  bbox: [139.965, -38.03, 155.258, -27.839], // example: NSW [[Limit region](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder-limit-region/)]
  limit: 5,
  // proximity: [lng, lat]
  proximity: [151.2093, -33.8688], // bias near Sydney
  streets: true,
};
```
