import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../../components/inputs/input";

export default function Form({ handleSubmit, setData, data, editMode }) {
  return (
    <View>
      <View>
        <Input 
          label="Nome *"
          onChangeText={(input) => setData({ ...data, name: input })}
          value={data?.name}
          placeholder='Nome'
          className={`border w-full p-2 rounded-lg`}
          bgColor='bg-white'
        />

        <Input 
          label="CPF *"
          onChangeText={(input) => setData({ ...data, cpf: input })}
          value={data?.cpf}
          placeholder='CPF'
          className={`border w-full p-2 rounded-lg`}
          bgColor='bg-white'
        />

        <Input 
          label="Senha *"
          onChangeText={(input) => setData({ ...data, password: input })}
          value={data?.password}
          placeholder='Senha'
          className={`border w-full p-2 rounded-lg`}
          bgColor='bg-white'
        />

        <Input 
          label="Confimar senha *"
          onChangeText={(input) => setData({ ...data, confirmPassword: input })}
          value={data?.confirmPassword}
          placeholder='Confimar senha'
          className={`border w-full p-2 rounded-lg`}
          bgColor='bg-white'
        />

        <Input 
          label="Permissão *"
          onChangeText={(input) => setData({ ...data, role: input })}
          value={data?.role}
          placeholder='Permissão'
          className={`border w-full p-2 rounded-lg`}
          bgColor='bg-white'
        />
      </View>

      <View className="mt-4 mb-4">
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: '#FFC042',
            padding: 16,
            borderRadius: 4,
            alignItems: 'center',
          }}
        >
          <Text className="font-medium text-base text-primary-gray2">
            {editMode ? "Atualizar" : "Salvar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}