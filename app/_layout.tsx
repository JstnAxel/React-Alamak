import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="place/[slug]" options={{ headerShown: true }} />
      <Stack.Screen name="category/[categories]" options={{ headerShown: true }} />
    </Stack>
  );
}
