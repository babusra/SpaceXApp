import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
  StyleSheet,
} from 'react-native';
import React from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import {Colors} from '../resources/Colors';

interface Props {
  route?: any;
  navigation?: any;
}

const LaunchDetailScreen = (props: Props) => {
  console.log('a', props.route.params.item);

  const onPressWikiLink = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{left: 0, position: 'absolute'}}
          onPress={() => props.navigation.goBack()}>
          <Text style={{fontSize: 25}}>←</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', fontSize: 20}}>Launch Detail</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <YoutubePlayer
          videoId={props.route.params.item.links.youtube_id}
          height={Dimensions.get('window').height / 4}
          width={Dimensions.get('window').width / 1.11}
        />
        <View style={styles.body}>
          <Image
            style={{width: 78, height: 90}}
            source={{uri: props.route.params.item.links.patch.small}}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: '70%',
            }}>
            <View style={{marginVertical: 20}}>
              <Text style={{fontSize: 15, fontWeight: '400'}}> name:</Text>
              <Text style={{fontSize: 20, fontWeight: '800'}}>
                {props.route.params.item.name}{' '}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 15, fontWeight: '400'}}>
                flight number:
              </Text>
              <Text style={{fontSize: 20, fontWeight: '800'}}>
                {' '}
                {props.route.params.item.flight_number}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{paddingVertical: 30}}
          onPress={() =>
            onPressWikiLink(props.route.params.item.links.wikipedia)
          }>
          <Text>go wikipedia page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LaunchDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
  },
  body: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});
