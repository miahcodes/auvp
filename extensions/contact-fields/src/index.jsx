import React from 'react';
import {
  useExtensionApi,
  render,
  Banner,
  useTranslate,
  View,
  Select,
  Grid,
  TextField,
  Checkbox,
  Text,
  BlockSpacer,
  Link,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Contact::RenderAfter', () => <App />);

function App() {
  const {extensionPoint} = useExtensionApi();
  const translate = useTranslate();
  return (
    <View spacing={'loose'}>
      <Grid padding={'tight'} border={'base'} cornerRadius={'base'}>
        <Checkbox id="checkbox" name="checkbox">
          <Text emphasis={'bold'} size='medium'>Join our Loyalty Program and Get Rewarded!</Text>
          <View>
            <Text>Earn points for every purchase, access to members-only promotions, and more. Don't miss out on the perks of being a loyal customer! <Link to={'https://google.com'} external>Learn more</Link></Text>
          </View>
        </Checkbox>
      </Grid>
      <BlockSpacer />
      <Grid columns={['50%', '50%']} spacing={'base'}>
      	<Select
          label="Document Type"
          value="id"
          options={[
            {
              value: 'id',
              label: 'ID',
            },
            {
              value: 'passport',
              label: 'Passport',
            },
            {
              value: 'drivers-license',
              label: 'Driver\'s license',
            },
          ]}
        />
        <TextField label={'Document Number'} />
      </Grid>
    </View>
  );
}
