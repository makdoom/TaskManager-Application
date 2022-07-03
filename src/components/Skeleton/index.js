import { View, Text } from "react-native";
import React from "react";
import { Placeholder, PlaceholderLine, Fade } from "rn-placeholder";
import colors from "../../constant/colors";

const Skeleton = () => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Placeholder
        style={{}}
        Animation={(props) => (
          <Fade {...props} style={{ backgroundColor: colors.gray }} />
        )}
      >
        {/* <PlaceholderLine height={220} style={{ borderRadius: 10 }} />
        <PlaceholderLine height={220} style={{ borderRadius: 10 }} /> */}
        <PlaceholderLine style={{ borderWidth: 1 }} width={80} height={200} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
    </View>
  );
};

export default Skeleton;
