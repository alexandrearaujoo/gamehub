import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

import "./src/services/notification.config";
import { useEffect, useRef } from "react";
import { Subscription } from "expo-modules-core";
import { getPushNotificationToken } from "./src/services/getPushNotification";
import * as Notifications from "expo-notifications";

export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {});

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((res) => {});

    return () => {
      if (
        getNotificationListener.current &&
        responseNotificationListener.current
      ) {
        Notifications.removeNotificationSubscription(
          getNotificationListener.current
        );
        Notifications.removeNotificationSubscription(
          responseNotificationListener.current
        );
      }
    };
  }, []);

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoading ? <Routes /> : <Loading />}
    </Background>
  );
}
