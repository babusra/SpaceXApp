import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import YoutubePlayer from '../components/YoutubePlayer';

interface Props {
  route?: any;
}

const LaunchDetailScreen = (props: Props) => {
  console.log('a', props.route.params.item);
  return (
    <View style={{flex: 1, paddingHorizontal: 15,backgroundColor:'#fff'}}>
      <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 50}}>
        Launch Detail
      </Text>
      <View style={{marginTop: 80}}>
        <YoutubePlayer
          videoId={props.route.params.item.links.youtube_id}
          height={'100%'}
          width={'100%'}
        />

        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            position: 'absolute',
            top: 250,
            flexDirection: 'row',
            width: '100%',
          }}>
          <Image
            style={{width: 78, height: 90}}
            source={{uri: props.route.params.item.links.patch.small}}
          />
          <View style={{flexDirection: 'column', justifyContent: 'space-around',width:'70%'}}>
            <View style={{marginVertical:20}}>
              <Text style={{fontSize: 15, fontWeight: '400'}}> name:</Text>
              <Text style={{fontSize: 20, fontWeight: '800'}}>
                {props.route.params.item.name}{' '}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 15, fontWeight: '400'}}>flight number:
              </Text>
              <Text style={{fontSize: 20, fontWeight: '800'}}>
              {' '}{props.route.params.item.flight_number}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LaunchDetailScreen;
