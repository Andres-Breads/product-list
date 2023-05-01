import 'react-native';
import React from 'react';
import ProductDetail from '../ProductDetail';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../types/MainStackParamLIst';
import { ProductType } from '../../types';

type MockNavigationProp = StackNavigationProp<MainStackParamList, 'ProductDetail'>;

const mockProduct: ProductType = {
  createdAt: '2023-03-11T08:39:51.035Z',
  product: 'Mock Product',
  points: 100,
  image: 'https://loremflickr.com/640/480/nightlife',
  is_redemption: false,
  id: 'mock-id',
};

const mockNavigation: MockNavigationProp = {
  navigate: jest.fn(),
  setParams: jest.fn(),
};

const mockRoute = {
  params: {
    product: mockProduct,
  },
};

describe('ProductList component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SafeAreaProvider>
        <ProductDetail navigation={mockNavigation} route={mockRoute}/>
      </SafeAreaProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});