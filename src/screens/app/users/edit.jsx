import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Form from './form';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import UsersAPI from '../../../api/users-api';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { NProgressCustom } from '../../../components/loading';

export default function EditUser({ route }) {
  const { id } = route.params
  const navigation = useNavigation()
  const [submitLoading, setSubmitLoading] = useState(false)

  const [newUser, setNewUser] = useState({
    name: '',
    cpf: '',
    password: '',
    confirmPassword: '',
    currentLocation: '',
    role: ''
  })

  const handleSubmit = async () => {
    setSubmitLoading(true);

    try {
      await UsersAPI.Update(id, newUser);

      Toast.show({
        type: "success",
        text2: "Usuário editado com sucesso.",
      });
      
      setNewUser({})
      navigation.navigate('Users')
    } catch (error) {
      console.log(error)
      Toast.show({
        type: "error",
        text2: "Erro ao editar usuário.",
      });

    } finally {
      setSubmitLoading(false);
    }
  }

  if (submitLoading)
    return (
      <NProgressCustom
        enabled={submitLoading}
        loadingText="Editando usuário..."
      />
    );
  return (
    <ScrollView className="bg-primary-white">
      <View className="px-6">
        <View className="flex-row items-center justify-between pb-4 pt-2">
          <TouchableOpacity
            onPress={() => (navigation.navigate('Users'))}
            className="py-1"
          >
            <Image
              source={require("../../../imgs/Seta2.png")}
              style={{ width: 40, height: 30, tintColor: '#4C4766' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('teste')}
            // className="border-b py-2"
          >
            <Text />
          </TouchableOpacity>
        </View>

        <Form  
          handleSubmit={handleSubmit}
          setData={setNewUser}
          data={newUser}
          editMode={true}
        />
      </View>
    </ScrollView>
  );
}
