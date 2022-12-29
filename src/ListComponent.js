import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import {data} from './dummyJson';
import GiftImage from './assets/gift.png'

const ListComponent = () => {
  const List = (data) => {
    const {item} = data
    return (
        <View key={item.id} style={styles.card}>
            <View style={styles.imageContainer}>
                <View style={styles.dateContainer}>
                    <View style={styles.dateView}>
                        <Text style={{fontsize: 20}}>
                            {item.date}
                        </Text>
                        <Text>
                            {item.month}
                        </Text>
                    </View>
                </View>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={GiftImage}/>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text styles={styles.heading}>{item.heading}</Text>
                <View style={styles.subtextContainer}>
                    <Text>{item.subtext}</Text>
                    <Text>{item.time}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.buttonText}>Register Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.buttonText}>Details</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.inviteButton}>
                    <Text>Invite</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  };
  return (
    <ScrollView style={styles.container}>
      {data?.map(item => (
        <List item={item} />
      ))}
    </ScrollView>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop:20,
        color: '#000',
    },
    card: {
        marginTop: 10,
        paddingVertical: 10,
        paddingRight: 30,
        borderRadius: 8,
        borderWidth:1,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateContainer: {
        paddingLeft: -15
    },
    imageWrapper: {
        width: 160,
        height:150,
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    dateView: {
        marginTop: 25,
        width: 130,
        height: 100,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        marginTop:10,
       paddingLeft:20
    },
    heading: {
        fontSize: 14
    },
    subtextContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
    },
    button: {
        height:40,
        width: 150,
        borderRadius: 8,
        backgroundColor: '#2E67F8',
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    },
    inviteButton: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 10,
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'center'
    }
})


