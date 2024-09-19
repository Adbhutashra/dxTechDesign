import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';

const templates = [
  {
    id: 1,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
  {
    id: 2,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
  {
    id: 3,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
  {
    id: 4,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
  {
    id: 5,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
  {
    id: 6,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
  {
    id: 7,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
  {
    id: 8,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
  {
    id: 9,
    name: 'Template Name',
    image: require('./assets/lease.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    category: 'Real Estate',
  },
];

const TemplateCard = ({template}) => (
  <View style={styles.card}>
    <Image source={template.image} style={styles.image} />
    <Text style={styles.templateName}>{template.name}</Text>
    <Text style={styles.description}>{template.description}</Text>
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.esignButton}>
        <View style={styles.esignButtonContainer}>
          <Image source={require('./assets/sign.png')} />
          <Text style={styles.esignButtonText}>E-Sign</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryButtonText}>{template.category}</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.useTemplateButton}>
      <Text style={styles.useTemplateText}>Use Template</Text>
    </TouchableOpacity>
  </View>
);

const TemplateListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require('./assets/appBarLogo.png')}
          style={styles.logo}
        />
        <View style={styles.menu}>
          <Text style={styles.menuOption}>Option 1</Text>
          <Text style={styles.menuOption}>Option 2</Text>
          <Text style={styles.menuOption}>Option 3</Text>
          <Text style={styles.menuOption}>Option 4</Text>
          <Text style={styles.menuOption}>Option 5</Text>
        </View>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder="Search in all Templates"
            style={styles.searchInput}
          />
          <View style={styles.searchContainer}>
            <Image source={require('./assets/search.png')} />
          </View>
        </View>
      </View>
      <FlatList
        data={templates}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <TemplateCard template={item} />}
      />
    </View>
  );
};
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  menu: {
    flexDirection: 'row',
  },
  menuOption: {
    marginHorizontal: 2,
    fontSize: 10,
    color: '#000',
  },
  contactButton: {
    backgroundColor: '#0A1551',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  contactButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '90%',
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#DADEF3',
  },
  searchContainer: {
    marginLeft: 5,
    height: 50,
    width: 50,
    backgroundColor: '#0A1551',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 3,
    flex: 1,
    alignItems: 'center',
    maxWidth: screenWidth - 40,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  templateName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  esignButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  esignButton: {
    backgroundColor: '#0066C3',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  esignButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  categoryButton: {
    backgroundColor: '#FFD8CF',
    padding: 8,
    borderRadius: 5,
  },
  categoryButtonText: {
    color: '#252D5BE5',
  },
  useTemplateButton: {
    backgroundColor: '#002D72',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  useTemplateText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default TemplateListScreen;
