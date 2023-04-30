import { createStackNavigator } from "@react-navigation/stack";
import ProductList from "../screens/ProductList";
import ProductDetail from "../screens/ProductDetail";
import { MainStackParamList } from "../types/MainStackParamLIst";

const MainStack = createStackNavigator<MainStackParamList>();

const MainRouter = () => (
  <MainStack.Navigator initialRouteName="ProductList">
    <MainStack.Screen name="ProductList" component={ProductList} />
    <MainStack.Screen name="ProductDetail" component={ProductDetail} />
  </MainStack.Navigator>
)

export default MainRouter;