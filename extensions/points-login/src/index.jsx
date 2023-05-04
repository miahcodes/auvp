import React from 'react';
import {
  useExtensionApi,
  render,
  Banner,
  Grid,
  View,
  useTranslate,
  Image,
  Text,
  Pressable,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const {shop} = useExtensionApi();
  return (
    <View
      overflow='hidden'
      cornerRadius={'base'}
    >
      <View
        position={{
          type:'absolute',
          blockStart: '0',
          inlineStart: '0'
        }}
      >
        <Image
          fit={'contain'}
          source={'https://pub-static.fotor.com/assets/aiImageConfig/template/yp50b9m39o9v.png'}
        />
      </View>
      <Grid
        columns={['8%', '33%', 'auto', 'fill', '8%']}
        rows={['auto']}
        spacing="loose"
        cornerRadius='base'
        border="base"
        padding="tight"
      >
        <View blockAlignment='center'>
          <Image source="https://cdn.shopify.com/s/files/1/0742/1699/7167/files/icon-pmc-lock.png"/>
        </View>
        <View
          blockAlignment='center'
        >
          <Text>To continue earning points, please login to your account.</Text>
        </View>
        <View
          display='inline'
          blockAlignment='center'
          padding={['none', 'none', 'none', 'none']}
        >
          <Pressable
            kind='secondary'
            appearance='interactive'
            padding={['extraTight', 'base', 'extraTight', 'base']}
            cornerRadius={'base'}
            border={'base'}
            to={shop.storefrontUrl + 'account/login'}
          >
            <Text emphasis='bold'>Sign in</Text>
          </Pressable>
        </View>
        <View>
          <Text></Text>
        </View>
        <View
          blockAlignment={'center'}
        >
          <Image
          viewportInlineSize='small'
          fit={'contain'}
          source={'https://cdn.shopify.com/s/files/1/0742/1699/7167/files/icon-1infinite.png'}/>
        </View>
      </Grid>
    </View>
  );
}
