import React from "react";
import { Image, View } from "react-native";

const SliderCard = ({ imageUrl }: any) => {
  return <Image source={imageUrl} width={100} height={100} />;
};

export default SliderCard;
