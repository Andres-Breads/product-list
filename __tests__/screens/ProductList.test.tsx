import 'react-native';
import React from 'react';
import ProductList from '../../src/screens/ProductList';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../src/types/MainStackParamLIst';

type MockNavigationProp = StackNavigationProp<MainStackParamList, 'ProductList'>;

const mockNavigation: MockNavigationProp = {
  navigate: jest.fn(),
  setParams: jest.fn(),
};

describe('ProductList component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SafeAreaProvider>
        <ProductList navigation={mockNavigation}/>
      </SafeAreaProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});