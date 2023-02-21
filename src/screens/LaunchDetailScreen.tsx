import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import React from 'react';
import YoutubePlayer from '../components/YoutubePlayer';

interface Props {
  route?: any;
}

const LaunchDetailScreen = (props: Props) => {
  console.log('a', props.route.params.item);

  const onPressWikiLink = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 15, backgroundColor: '#fff'}}>
      <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 50}}>
        Launch Detail
      </Text>
      <View style={{alignItems:'center'}}>
        <YoutubePlayer
          videoId={props.route.params.item.links.youtube_id}
          height={Dimensions.get('window').height / 4}
          width={Dimensions.get('window').width / 1.11}
        />
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
          }}>
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
        <TouchableOpacity style={{paddingVertical:30}} onPress={() => onPressWikiLink(props.route.params.item.links.wikipedia)}>
        <Text>go wikipedia page</Text>
      </TouchableOpacity>
      </View>
  
    </View>
  );
};

export default LaunchDetailScreen;
