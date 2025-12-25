import React, { useState } from "react";
import { View, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Typography } from "~/components/typography";
import { X, Minus, Plus } from "lucide-react-native";

interface NumberPickerProps {
  value: number;
  onValueChange: (value: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  title?: string;
  subtitle?: string;
  type: "numberOfMasses" | "stipendPerMass" | "celebrationDate";
  formatValue?: (value: number) => string;
  busyDates?: number[];
}

export function NumberPicker({
  value,
  onValueChange,
  minimumValue = 1,
  maximumValue = 30,
  step,
  title = "Quantidade",
  subtitle = "Selecione a quantidade desejada",
  type,
  formatValue,
  busyDates,
}: NumberPickerProps) {
  const isStipend = type === "stipendPerMass";
  const isDate = type === "celebrationDate";

  const effectiveStep =
    step ?? (isStipend ? 0.5 : isDate ? 24 * 60 * 60 * 1000 : 1); // 1 day for dates
  const effectiveMin = isStipend
    ? 10
    : isDate
      ? Date.now() + 24 * 60 * 60 * 1000
      : minimumValue; // Tomorrow for dates
  const effectiveMax = isStipend
    ? 100
    : isDate
      ? Date.now() + 365 * 24 * 60 * 60 * 1000
      : maximumValue; // 1 year from now for dates

  const [modalVisible, setModalVisible] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const openModal = () => {
    setTempValue(value);
    setModalVisible(true);
  };

  const confirmValue = () => {
    onValueChange(tempValue);
    setModalVisible(false);
  };

  const increment = () => {
    if (tempValue + effectiveStep <= effectiveMax) {
      setTempValue(tempValue + effectiveStep);
    }
  };

  const decrement = () => {
    if (tempValue - effectiveStep >= effectiveMin) {
      setTempValue(tempValue - effectiveStep);
    }
  };

  const quickSelect = (num: number) => {
    if (num >= effectiveMin && num <= effectiveMax) {
      setTempValue(num);
    }
  };

  // Opções rápidas diferentes consoante o tipo
  const quickSelectOptions = isStipend
    ? [5, 8, 10, 11, 15, 20, 25, 50]
    : isDate
      ? (() => {
          const now = Date.now();
          const tomorrow = now + 24 * 60 * 60 * 1000;
          return [
            tomorrow, // Tomorrow
            tomorrow + 7 * 24 * 60 * 60 * 1000, // Next week
            tomorrow + 14 * 24 * 60 * 60 * 1000, // In 2 weeks
            tomorrow + 30 * 24 * 60 * 60 * 1000, // In 1 month
          ];
        })()
      : [1, 3, 5, 10, 15, 20, 25, 30];

  // Formatação do valor exibido
  const displayValue = (val: number): string => {
    if (formatValue) return formatValue(val);
    if (isStipend) return `€${val.toFixed(2)}`;
    if (isDate) return new Date(val).toLocaleDateString("pt-PT");
    return `${val} ${val === 1 ? "missa" : "missas"}`;
  };

  const mainDisplayValue = isStipend
    ? `€${tempValue.toFixed(2)}`
    : isDate
      ? new Date(tempValue).toLocaleDateString("pt-PT")
      : `${tempValue}`;

  const mainDisplaySuffix = isStipend
    ? ""
    : isDate
      ? ""
      : tempValue === 1
        ? "missa"
        : "missas";

  return (
    <View className="w-full">
      <TouchableOpacity
        className="medium-background w-full p-4 rounded-lg border border-sepia-200 flex-row items-center justify-between"
        onPress={openModal}
      >
        <View className="flex-1">
          <Typography className="text-sepia">{displayValue(value)}</Typography>
        </View>
        <Typography className="text-sepia-500 text-sm">Selecionar →</Typography>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="medium-background rounded-t-3xl p-6">
            <View className="flex-row justify-between items-center mb-6">
              <View className="flex-1">
                <Typography className="text-xl font-bold text-sepia-900 mb-1">
                  {title}
                </Typography>
                <Typography className="text-sm text-sepia-600">
                  {subtitle}
                </Typography>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="p-2"
              >
                <X size={24} color="#7c2d12" />
              </TouchableOpacity>
            </View>

            {/* Valor principal */}
            <View className="bg-sepia-100 rounded-2xl p-6 mb-6 items-center">
              <Typography className="text-4xl font-bold text-burgundy-700 mb-2">
                {mainDisplayValue}
              </Typography>
              <Typography className="text-sm text-sepia-600">
                {mainDisplaySuffix}
              </Typography>
            </View>

            {/* Botões + / - */}
            <View className="flex-row justify-center items-center gap-6 mb-6">
              <TouchableOpacity
                className={`w-16 h-16 rounded-full items-center justify-center ${
                  tempValue > effectiveMin
                    ? "bg-burgundy-600"
                    : "bg-sepia-300 opacity-50"
                }`}
                onPress={decrement}
                disabled={tempValue <= effectiveMin}
              >
                <Minus size={24} color="white" />
              </TouchableOpacity>

              <View className="flex-1 max-w-32">
                <Typography className="text-center text-sepia-600 text-sm">
                  {isStipend
                    ? `€${effectiveMin.toFixed(2)} - €${effectiveMax.toFixed(2)}`
                    : isDate
                      ? `${new Date(effectiveMin).toLocaleDateString("pt-PT")} - ${new Date(effectiveMax).toLocaleDateString("pt-PT")}`
                      : `${effectiveMin} - ${effectiveMax}`}
                </Typography>
              </View>

              <TouchableOpacity
                className={`w-16 h-16 rounded-full items-center justify-center ${
                  tempValue < effectiveMax
                    ? "bg-burgundy-600"
                    : "bg-sepia-300 opacity-50"
                }`}
                onPress={increment}
                disabled={tempValue >= effectiveMax}
              >
                <Plus size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* Seleção rápida */}
            <View className="mb-6">
              <Typography className="text-sm font-semibold text-sepia-700 mb-3">
                Seleção rápida:
              </Typography>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-2">
                  {quickSelectOptions.map((num) => (
                    <TouchableOpacity
                      key={num}
                      className={`px-4 py-2 rounded-lg border ${
                        Math.abs(tempValue - num) < 0.01
                          ? "bg-burgundy-600 border-burgundy-600"
                          : "bg-sepia-100 border-sepia-300"
                      }`}
                      onPress={() => quickSelect(num)}
                    >
                      <Typography
                        className={`font-semibold ${
                          Math.abs(tempValue - num) < 0.01
                            ? "text-white"
                            : "text-sepia-800"
                        }`}
                      >
                        {isStipend
                          ? `€${num.toFixed(2)}`
                          : isDate
                            ? new Date(num).toLocaleDateString("pt-PT")
                            : num}
                      </Typography>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* Botões de ação */}
            <View className="flex-row gap-3">
              <TouchableOpacity
                className="flex-1 p-4 rounded-lg border border-sepia-300 items-center"
                onPress={() => setModalVisible(false)}
              >
                <Typography className="text-sepia-800 font-bold">
                  Cancelar
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 p-4 rounded-lg bg-burgundy-600 items-center"
                onPress={confirmValue}
              >
                <Typography className="text-white font-bold">
                  Confirmar
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
