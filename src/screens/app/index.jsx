import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { DividerWithText } from '../../components/line';
import FlatListComponent from '../../components/lists/flat-list';
import { useIsFocused } from '@react-navigation/native';
import OrderAPI from '../../api/order-api'

export default function Index() {
  // const navigation = useNavigation()
  const idUser = 'cfe1007f-a418-4b28-8e6a-163e5a0ba1a2'
  const isFocused = useIsFocused()
  const [data, setData] = useState([])

  useEffect(() => {
    loadRegister()
  }, [isFocused])

  const loadRegister = async () => {
    // setLoading(true);

    try {
      const res = await OrderAPI.GetOrderPedding(idUser)
      console.log("Resre: ", res?.data?.orders)

      setData(res?.data?.orders);
    } catch (e) {
      console.log("Erro:", e);
      // Toast.show({
      //   type: "error",
      //   text2: "Erro na busca!",
      // })
    } finally {
      // setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary-white px-6">
      <DividerWithText text={`${data?.length} entregas`} />

      <FlatListComponent data={data} />

    </SafeAreaView>
  );
}
