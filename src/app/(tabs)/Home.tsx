import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import AuditCard from "@/src/components/audit/AuditCard";
import AuditBarChart from "@/src/components/audit/AuditBarChat";
import { ScrollView } from "react-native";
import AuditPieChart from "@/src/components/audit/AuditPieChart";
import AuditQuickActions from "@/src/components/audit/AuditQuickActions";
import Animated, { Easing, FadeInDown } from "react-native-reanimated";

const Home = () => {
  return (
    <ScreenWrapper>
      <ScrollView indicatorStyle="white">
        <Animated.View
          entering={FadeInDown.duration(1000).springify().damping(14)}
        >
          <AuditCard />
          <AuditBarChart />
          <AuditPieChart />
          <AuditQuickActions />
        </Animated.View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
