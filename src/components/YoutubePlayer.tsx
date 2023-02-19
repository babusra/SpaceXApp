import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import YoutubeIframe from 'react-native-youtube-iframe';

interface Props {
  videoId: string;
  height: number;
  width: number;
}

const YoutubePlayer = (props: Props) => {
  const [play, setplay] = useState(false);

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => setplay(!play)}>
      <View pointerEvents="none"  renderToHardwareTextureAndroid>
        <YoutubeIframe
          play={play}
          contentScale={0.6}
          height={props.height}
          width={props.width}
          initialPlayerParams={{
            controls: true,
          }}
          videoId={props.videoId}
          webViewStyle={{}}
          webViewProps={{
            containerStyle: {},
            startInLoadingState: true,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default YoutubePlayer;
