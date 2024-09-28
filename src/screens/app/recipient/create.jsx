import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { NProgressCustom } from '../../../components/loading';
import RecipientsAPI from '../../../api/recipient-api';
import Form from './partials/form';

export default function CreateRecipient() {
  const navigation = useNavigation()
  const [submitLoading, setSubmitLoading] = useState(false)

  const [newData, setNewData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  })

  const handleSubmit = async () => {
    setSubmitLoading(true);

    try {
      await RecipientsAPI.Create(newData);

      Toast.show({
        type: "success",
        text2: "Destinatário cadastrado com sucesso.",
      });
      
      setNewData({})
      navigation.navigate('Recipients')
    } catch (error) {
      Toast.show({
        type: "error",
        text2: "Erro ao cadastrar destinatário.",
      });

    } finally {
      setSubmitLoading(false);
    }
  }

  if (submitLoading)
    return (
      <NProgressCustom
        enabled={submitLoading}
        loadingText="Cadastrando destinatário..."
      />
    );
  return (
    <ScrollView className="bg-primary-white">
      <View className="px-6">
        <View className="flex-row items-center justify-between pb-4 pt-2">
          <TouchableOpacity
            onPress={() => (navigation.navigate('Recipients'))}
            className="py-1"
          >
            <Image
              source={require("../../../imgs/Seta2.png")}
              style={{ width: 40, height: 30, tintColor: '#4C4766' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Text />
          </TouchableOpacity>
        </View>

        <Form  
          handleSubmit={handleSubmit}
          setData={setNewData}
          data={newData}
        />
      </View>
    </ScrollView>
  );
}
