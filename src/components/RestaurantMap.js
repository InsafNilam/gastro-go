import React, { useRef } from "react";
import { View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const RestaurantMap = ({ coordinates, title }) => {
  const mapRef = useRef(null);

  return (
    <View className="bg-blue-300 relative h-[250]">
      <MapView
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        ref={mapRef}
        className="h-full z-10"
      >
        {coordinates && (
          <Marker
            coordinate={{
              ...coordinates,
            }}
            identifier="shop"
            anchor={{ x: 0.5, y: 0.5 }}
            title={title}
          >
            <Image
              source={require("../../assets/images/shop.png")}
              style={{ height: 27, width: 27 }}
            />
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default RestaurantMap;
