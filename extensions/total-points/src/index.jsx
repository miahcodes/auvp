import React from 'react';
import {
  useExtensionApi,
  render,
  Banner,
  useTranslate,
  View,
  Icon,
  Pressable,
  Grid,
  Text,
  InlineLayout,
  Tooltip,
  Link
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const {extensionPoint,shop} = useExtensionApi();
  const translate = useTranslate();
  return (
    <View
      border={['base','none','none','none']}
      padding={['base', 'none', 'none', 'none']}
    >
      <Grid
        columns={['auto', 'fill']}
        spacing={['base', 'base']}
      >
        <Grid columns={['auto','auto']} padding='none' spacing={'tight'}>
          <Text appearance={'subdued'}>Points to earn</Text>
          <Pressable
            overlay={
              <Tooltip><Link to={shop.storefrontUrl + 'account/login'} appearance='monochrome'>Login</Link> or register to earn points for this transaction which can be redeemed on your next purchase.</Tooltip>
            }
          >
            <Icon source='questionFill' appearance='subdued' />
          </Pressable>
        </Grid>
        <InlineLayout padding='none' inlineAlignment={'end'}>
          <Text>190</Text>
        </InlineLayout>
      </Grid>
    </View>
  );
}
