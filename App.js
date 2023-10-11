import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [screen, setScreen] = useState('Home');
  const [patientInfo, setPatientInfo] = useState({});
  const [appointmentType, setAppointmentType] = useState('Técnico');
  const [paymentInfo, setPaymentInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [patients, setPatients] = useState([]);

  const handleAppointment = () => {
    console.log('Informações do paciente:', patientInfo);
    console.log('Experiência:', appointmentType);

    let appointmentPrice = 100;
    if (appointmentType === 'Nacionalidade') {
      appointmentPrice = 120;
    }

    setPaymentInfo({ ...patientInfo, appointmentType, appointmentPrice });
    setPatients([...patients, { ...patientInfo, appointmentType, appointmentPrice }]);
    setScreen('Payment');
  };

  const viewPatientList = () => {
    setScreen('PatientList');
  };

  const handleGoBack = () => {
    setScreen('Home');
  };

  const footballPlayers = [
    {
      name: "Cristiano Ronaldo",
      position: "Forward",
      age: 36,
    },
    {
      name: "Lionel Messi",
      position: "Attacking Midfielder",
      age: 34,
    },
    {
      name: "Neymar Jr.",
      position: "Forward",
      age: 29,
    },
    {
      name: "Kylian Mbappé",
      position: "Forward",
      age: 23,
    },
    {
      name: "Sergio Ramos",
      position: "Defender",
      age: 35,
    },
    {
      name: "raplhel Veiga",
      position: "Midfielder",
      age: 27,
    },
    {
      name: "Robert Lewandowski",
      position: "Forward",
      age: 32,
    },
    {
      name: "Virgil van Dijk",
      position: "Defender",
      age: 30,
    },
    {
      name: "Luka Modric",
      position: "Midfielder",
      age: 35,
    },
    {
      name: "Erling Haaland",
      position: "Forward",
      age: 21,
    },
    {
      name: "Weverton",
      position: "Goalkeeper",
      age: 33,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {screen === 'Home' && (
        <View>
          <Text style={styles.header}>Seletiva de técnicos Palmeiras</Text>
          <Text style={styles.subHeader}>O maior campeão do Brasil</Text>
          <Button style={styles.button} title="Formulario para inscrição" onPress={() => setScreen('Appointment')} color="green" />
          <Button style={styles.button} title="Lista dos jogadores do time" onPress={viewPatientList} color="blue" />
        </View>
      )}
      {screen === 'Appointment' && (
        <View>
          <Text style={styles.header}>Formulario de Inscrição</Text>
          <TextInput
            placeholder="Nome Completo"
            style={styles.input}
            onChangeText={(text) => setPatientInfo({ ...patientInfo, name: text })}
          />
          <TextInput
            placeholder="Data de Nascimento"
            style={styles.input}
            onChangeText={(text) => setPatientInfo({ ...patientInfo, birthdate: text })}
          />
          <TextInput
            placeholder="Nacionalidade"
            style={styles.input}
            onChangeText={(text) => setPatientInfo({ ...patientInfo, Nacionalidade: text })}
          />
          <TextInput
            placeholder="Experiência na profissão (em anos)"
            style={styles.input}
            onChangeText={(text) => setPatientInfo({ ...patientInfo, Experiência: text })}
          />
          <Button title="Finalizar Inscrição" onPress={handleAppointment} color="green" />
          <Button title="Voltar" onPress={handleGoBack} color="gray" />
        </View>
      )}
      {screen === 'Payment' && (
        <View>
          <Text style={styles.header}>Inscrição Concluída!</Text>
          <Text style={styles.paymentInfo}>Nome: {paymentInfo.name}</Text>
          <Text style={styles.paymentInfo}>Nacionalidade: {paymentInfo.Nacionalidade}</Text>
          <Text style={styles.paymentInfo}>Data de Nascimento: {paymentInfo.birthdate}</Text>
          <Text style={styles.paymentInfo}>Experiência (em anos): {paymentInfo.Experiência}</Text>
          {isEditing ? (
            <View>
              <Button title="Salvar Edições" onPress={() => setIsEditing(false)} color="green" />
            </View>
          ) : (
            <View>
              {/* Outras ações */}
            </View>
          )}
          <Button title="Voltar" onPress={handleGoBack} color="gray" />
        </View>
      )}
      {screen === 'PatientList' && (
        <View>
          <Text style={styles.header}>Lista de Jogadores do Palmeiras</Text>
          <FlatList
            data={footballPlayers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.patientItem}>
                <Text>Nome: {item.name}</Text>
                <Text>Posição: {item.position}</Text>
                <Text>Idade: {item.age}</Text>
              </View>
            )}
          />
          <Button title="Voltar" onPress={handleGoBack} color="gray" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 28,
    marginBottom: 10,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  paymentInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  patientItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  button: {
    padding: 10,
  }
});

export default App;