import { ActivityIndicator, View, Animated, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { burgundy } from "config";
import { useEffect, useState } from "react";
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
          title: "A Verificar",
          message: "A verificar actualizações disponíveis...",
          showSpinner: true,
        };
      case "available":
        return {
          icon: "book-bible" as const,
          title: "Nova Versão Disponível",
          message:
            "Uma actualização está pronta para instalar. Recomendamos que actualize para obter as últimas melhorias.",
          primaryAction: { text: "Actualizar", onPress: handlePrimaryAction },
          secondaryAction: { text: "Mais Tarde", onPress: dismissUpdate },
        };
      case "downloading":
        return {
          icon: "download" as const,
          title: "A Transferir",
          message:
            "A actualização está a ser transferida. Aguarde alguns momentos...",
          showSpinner: true,
        };
      case "ready":
        return {
          icon: "circle-check" as const,
          title: "Actualização Pronta",
          message:
            "A actualização foi transferida com sucesso. A aplicação será reiniciada para aplicar as alterações.",
          primaryAction: {
            text: "Reiniciar Agora",
            onPress: handlePrimaryAction,
          },
        };
      case "error":
        return {
          icon: "triangle-exclamation" as const,
          title: "Erro na Actualização",
          message:
            "Não foi possível concluir a actualização. Pode continuar a usar a aplicação normalmente.",
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
    <Animated.View style={{ opacity: fadeAnim }} className="flex-1">
      <View className="flex justify-center h-full bg-sepia-300 dark:bg-sepia-700 p-9">
        <View className="items-center p-5">
          <View className="w-16 h-16 items-center justify-center mb-3">
            {content.showSpinner ? (
              <ActivityIndicator size="large" color={burgundy[500]} />
            ) : (
              <FontAwesome6
                name={content.icon}
                size={55}
                color={burgundy[500]}
              />
            )}
          </View>
          <H6 text={content.title} />
        </View>

        <Typography className="font-serif text-sepia-700 dark:text-sepia-300 text-center mb-6 leading-relaxed">
          {content.message}
        </Typography>

        <View className="gap-3 p-5">
          {content.primaryAction && (
            <Pressable
              onPress={content.primaryAction.onPress}
              className="bg-burgundy-500 py-3 rounded-lg active:bg-burgundy-600"
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
              className="bg-sepia-200 py-3 rounded-lg active:bg-sepia-300 dark:active:bg-sepia-600"
            >
              <Typography className="text-sepia-700 p-1 text-center font-serif">
                {content.secondaryAction.text}
              </Typography>
            </Pressable>
          )}
        </View>
      </View>
    </Animated.View>
  );
};
