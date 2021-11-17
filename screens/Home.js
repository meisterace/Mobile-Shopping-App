import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Details ({ navigation }) {
    return(
      
        <SafeAreaView style={styles.mainForm}>
            <ScrollView>
            <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
    </View>

                <View>
                    <View >
                        <Image source={require("./assets/motor.jpg")} style={{width: '100%', height: 250, marginTop: 10, alignItems: 'center', borderRadius: 10,}}></Image>
                        
                        <View style={{backgroundColor: 'white', padding: 20, marginTop: 5, borderRadius: 5}}>
                            <Text style={{fontSize: '23', fontWeight: '500'}}> 2005 Triumph Rocket III Motorcycle.</Text>
                            <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}><Text style={{fontSize: '21', fontWeight: '500'}}></Text>$ 100,000</Text>
                            <Text style={styles.descriptionText}>The Rocket III Roadster is now the only version available. This model was awarded Motorcycle Cruiser magazine's 2004 Bike of the Year, Motorcyclist's 2004 Cruiser of the Year, and Cruising Rider magazine 2005 Bike of the Year.</Text>
                            <View style={{marginTop: 15}}>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 24 l (5.3 imp gal; 6.3 US gal)</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 127.1 hp (94.8 kW)
(rear wheel)[1]
148 hp (110 kW)@ 5,750 rpm (claimed)</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" />150/80 R17, 240/50 R16</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 2,294 cc (140.0 cu in) DOHC liquid-cooled straight three</Text>

                            </View>

                            <TouchableOpacity style={{marginTop: 60, alignItems: 'center', backgroundColor: 'black', borderRadius: 22, paddingVertical: 10}} onPress={() => navigation.navigate('Checkout')} >
                                <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

<View >
                        <Image source={require("./assets/aston.jpg")} style={{width: '100%', height: 250, marginTop: 40, alignItems: 'center', borderRadius: 10,}}></Image>
                        
                        <View style={{backgroundColor: 'white', padding: 20, marginTop: 5, borderRadius: 5}}>
                            <Text style={{fontSize: '23', fontWeight: '500'}}> AMB 001 Motorbike.</Text>
                            <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}><Text style={{fontSize: '21', fontWeight: '500'}}></Text>$ 120,000</Text>
                            <Text style={styles.descriptionText}>The carbon-fiber motorbike was made in partnership with English motorcycle-maker Brough Superior. Only 100 types are available.</Text>
                            <View style={{marginTop: 15}}>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> AMB 001 has 180 horsepower</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 997 cc (60.8 cu in) V-twin</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" />180 hp (130 kW)</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 180 kg (400 lb) (dry)</Text>

                            </View>

                            <TouchableOpacity style={{marginTop: 60, alignItems: 'center', backgroundColor: 'black', borderRadius: 22, paddingVertical: 10}} onPress={() => navigation.navigate('Checkout')} >
                                <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View >
                        <Image source={require("./assets/aston.jpg")} style={{width: '100%', height: 250, marginTop: 40, alignItems: 'center', borderRadius: 10,}}></Image>
                        
                        <View style={{backgroundColor: 'white', padding: 20, marginTop: 5, borderRadius: 5}}>
                            <Text style={{fontSize: '23', fontWeight: '500'}}> AMB 001 Motorbike.</Text>
                            <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}><Text style={{fontSize: '21', fontWeight: '500'}}></Text>$ 80,000</Text>
                            <Text style={styles.descriptionText}>The carbon-fiber motorbike was made in partnership with English motorcycle-maker Brough Superior. Only 100 types are available.</Text>
                            <View style={{marginTop: 15}}>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> AMB 001 has 180 horsepower</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 997 cc (60.8 cu in) V-twin</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" />180 hp (130 kW)</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 180 kg (400 lb) (dry)</Text>

                            </View>

                            <TouchableOpacity style={{marginTop: 60, alignItems: 'center', backgroundColor: 'black', borderRadius: 22, paddingVertical: 10}} onPress={() => navigation.navigate('Checkout')} >
                                <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                     
                     <View >
                        <Image source={require("./assets/aston.jpg")} style={{width: '100%', height: 250, marginTop: 40, alignItems: 'center', borderRadius: 10,}}></Image>
                        
                        <View style={{backgroundColor: 'white', padding: 20, marginTop: 5, borderRadius: 5}}>
                            <Text style={{fontSize: '23', fontWeight: '500'}}> AMB 001 Motorbike.</Text>
                            <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}><Text style={{fontSize: '21', fontWeight: '500'}}></Text>$ 50,000</Text>
                            <Text style={styles.descriptionText}>The carbon-fiber motorbike was made in partnership with English motorcycle-maker Brough Superior. Only 100 types are available.</Text>
                            <View style={{marginTop: 15}}>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> AMB 001 has 180 horsepower</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 997 cc (60.8 cu in) V-twin</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" />180 hp (130 kW)</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 180 kg (400 lb) (dry)</Text>

                            </View>

                            <TouchableOpacity style={{marginTop: 60, alignItems: 'center', backgroundColor: 'black', borderRadius: 22, paddingVertical: 10}} onPress={() => navigation.navigate('Checkout')} >
                                <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>



            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    mainForm: {
      padding: 20,
      flex: 1, 
      backgroundColor: '#f5f3ed',
    },
    descriptionText: {
        color: 'grey',
        marginTop: 10,
        fontSize: 16,
    }
});

