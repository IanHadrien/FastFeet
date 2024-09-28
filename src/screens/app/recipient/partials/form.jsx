import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../../../components/inputs/input";

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
          label="Endereço *"
          onChangeText={(input) => setData({ ...data, address: input })}
          value={data?.address}
          placeholder='Endereço'
          className={`border w-full p-2 rounded-lg`}
          bgColor='bg-white'
        />

        <Input 
          label="Telefone *"
          onChangeText={(input) => setData({ ...data, phone: input })}
          value={data?.phone}
          placeholder='Telefone'
          className={`border w-full p-2 rounded-lg`}
          bgColor='bg-white'
        />

        <Input 
          label="Email *"
          onChangeText={(input) => setData({ ...data, email: input })}
          value={data?.email}
          placeholder='Email'
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