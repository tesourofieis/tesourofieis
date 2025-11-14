import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { burgundy } from "config";
import { useEffect, useState } from "react";
import { ActivityIndicator, Animated, Pressable, View } from "react-native";
import { useUpdate } from "~/providers/update";
import { H6 } from "./Headings";
import { Typography } from "./typography";

export const Update = () => {
  const {
    updateState,
    applyUpdate,
    dismissUpdate,
    continueWithoutUpdate,
    reloadApp,
  } = useUpdate();
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (updateState !== "idle") {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [updateState]);

  const handlePrimaryAction = () => {
    if (updateState === "available" || updateState === "error") {
      applyUpdate();
    } else if (updateState === "ready") {
      reloadApp();
    }
  };

  const getContent = () => {
    switch (updateState) {
      case "checking":
        return {
          icon: "book-bible" as const,
          title: "A Verificar novas actualizações",
          showSpinner: true,
        };
      case "available":
        return {
          icon: "book-bible" as const,
          title: "Nova Versão Disponível",
          primaryAction: { text: "Actualizar", onPress: handlePrimaryAction },
          secondaryAction: { text: "Mais Tarde", onPress: dismissUpdate },
        };
      case "downloading":
        return {
          icon: "download" as const,
          title: "A Transferir",
          showSpinner: true,
        };
      case "ready":
        return {
          icon: "circle-check" as const,
          title: "Actualização Pronta",
          primaryAction: {
            text: "Reiniciar Agora",
            onPress: handlePrimaryAction,
          },
        };
      case "error":
        return {
          icon: "triangle-exclamation" as const,
          title: "Erro na Actualização",
          primaryAction: {
            text: "Tentar Novamente",
            onPress: handlePrimaryAction,
          },
          secondaryAction: {
            text: "Continuar",
            onPress: continueWithoutUpdate,
          },
        };
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;

  return (
    <View className="p-3 medium-background w-full border-b border-sepia">
      <View className="flex-row justify-between items-center gap-2">
        <H6 text={content.title} />
        <View className="items-center justify-center">
          {content.showSpinner ? (
            <ActivityIndicator size="small" color={burgundy[500]} />
          ) : (
            <FontAwesome6 name={content.icon} size={15} color={burgundy[500]} />
          )}
        </View>
      </View>

      <View className="flex-row justify-between border-t py-2">
        {content.primaryAction && (
          <Pressable
            onPress={content.primaryAction.onPress}
            className="bg-burgundy-500 rounded-lg active:bg-burgundy-600"
            disabled={
              updateState === "downloading" || updateState === "checking"
            }
          >
            <Typography className="text-sepia-300 p-1 text-center font-serif">
              {content.primaryAction.text}
            </Typography>
          </Pressable>
        )}

        {content.secondaryAction && (
          <Pressable
            onPress={content.secondaryAction.onPress}
            className="bg-sepia-200 rounded-lg active:bg-sepia-300 dark:active:bg-sepia-600"
          >
            <Typography className="text-sepia-700 p-1 text-center font-serif">
              {content.secondaryAction.text}
            </Typography>
          </Pressable>
        )}
      </View>
    </View>
  );
};
