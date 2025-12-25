import React, { useState } from "react";
import { View, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Typography } from "~/components/typography";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react-native";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  isAfter,
  isBefore,
} from "date-fns";
import { pt } from "date-fns/locale";

interface DateRangePickerProps {
  startDate?: Date | null;
  endDate?: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
  minimumDate?: Date;
  maximumDate?: Date;
}

export function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  minimumDate = new Date(),
  maximumDate,
}: DateRangePickerProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectingEnd, setSelectingEnd] = useState(false);

  const getDaysInMonth = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return eachDayOfInterval({ start, end });
  };

  const handleDatePress = (date: Date) => {
    if (!selectingEnd) {
      onStartDateChange(date);
      onEndDateChange(null);
      setSelectingEnd(true);
    } else {
      if (startDate && isBefore(date, startDate)) {
        onEndDateChange(startDate);
        onStartDateChange(date);
      } else {
        onEndDateChange(date);
      }
      setModalVisible(false);
      setSelectingEnd(false);
    }
  };

  const isDateSelectable = (date: Date) => {
    if (minimumDate && isBefore(date, startOfDay(minimumDate))) return false;
    if (maximumDate && isAfter(date, endOfDay(maximumDate))) return false;
    return true;
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return (
      (isSameDay(date, startDate) || isAfter(date, startDate)) &&
      (isSameDay(date, endDate) || isBefore(date, endDate))
    );
  };

  const isDateSelected = (date: Date) => {
    return (
      (startDate && isSameDay(date, startDate)) ||
      (endDate && isSameDay(date, endDate))
    );
  };

  const startOfDay = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const endOfDay = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

  const renderCalendarDay = (date: Date) => {
    const isSelectable = isDateSelectable(date);
    const isSelected = isDateSelected(date);
    const isInRange = isDateInRange(date);
    const isCurrentMonth = isSameMonth(date, currentMonth);
    const isCurrentDay = isToday(date);

    return (
      <TouchableOpacity
        key={date.toISOString()}
        className={`w-10 h-10 rounded-full items-center justify-center ${
          !isSelectable ? "opacity-30" : ""
        } ${!isCurrentMonth ? "opacity-50" : ""} ${
          isSelected ? "bg-burgundy-600" : isInRange ? "bg-burgundy-200" : ""
        } ${isCurrentDay && !isSelected ? "border border-burgundy-400" : ""}`}
        onPress={() => isSelectable && handleDatePress(date)}
        disabled={!isSelectable}
      >
        <Typography
          className={`text-sm ${
            isSelected
              ? "text-white font-bold"
              : isInRange
                ? "text-burgundy-800"
                : "text-sepia-800"
          }`}
        >
          {format(date, "d")}
        </Typography>
      </TouchableOpacity>
    );
  };

  const renderMonth = () => {
    const days = getDaysInMonth();
    const firstDayOfMonth = startOfMonth(currentMonth);
    const startOfWeek = firstDayOfMonth.getDay() || 7;

    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    return (
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity
            onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}
          >
            <ChevronLeft size={24} color="#7c2d12" />
          </TouchableOpacity>
          <Typography className="text-lg font-bold text-sepia-900">
            {format(currentMonth, "MMMM yyyy", { locale: pt })}
          </Typography>
          <TouchableOpacity
            onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
          >
            <ChevronRight size={24} color="#7c2d12" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mb-2">
          {weekDays.map((day) => (
            <View key={day} className="w-10 items-center">
              <Typography className="text-xs font-bold text-sepia-600 uppercase">
                {day}
              </Typography>
            </View>
          ))}
        </View>

        <ScrollView>
          <View className="flex-wrap flex-row justify-between">
            {Array.from({ length: startOfWeek - 1 }).map((_, index) => (
              <View key={`empty-${index}`} className="w-10 h-10" />
            ))}
            {days.map(renderCalendarDay)}
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View className="w-full">
      <TouchableOpacity
        className="medium-background w-full p-4 rounded-lg border border-sepia-200 flex-row items-center justify-between"
        onPress={() => setModalVisible(true)}
      >
        <View className="flex-1">
          {startDate ? (
            <Typography className="text-sepia">
              {startDate && endDate
                ? `${format(startDate, "dd/MM/yyyy")} - ${format(endDate, "dd/MM/yyyy")}`
                : `${format(startDate, "dd/MM/yyyy")} ${selectingEnd ? "até..." : ""}`}
            </Typography>
          ) : (
            <Typography className="text-sepia-500">
              {selectingEnd
                ? "Selecione a data final"
                : "Selecione o período desejado"}
            </Typography>
          )}
        </View>
        <Calendar size={20} color="#928374" />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(false);
          setSelectingEnd(false);
        }}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="medium-background rounded-t-3xl p-6 max-h-[80vh]">
            <View className="flex-row justify-between items-center mb-6">
              <Typography className="text-xl font-bold text-sepia-900">
                Selecionar Período
              </Typography>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setSelectingEnd(false);
                }}
              >
                <Typography className="text-burgundy-600 font-bold">
                  Fechar
                </Typography>
              </TouchableOpacity>
            </View>

            {startDate && !endDate && (
              <View className="mb-4 p-3 bg-burgundy-100 rounded-lg">
                <Typography className="text-sm text-burgundy-800">
                  Data inicial: {format(startDate, "dd/MM/yyyy")}
                </Typography>
                <Typography className="text-xs text-burgundy-600 mt-1">
                  Agora selecione a data final
                </Typography>
              </View>
            )}

            <ScrollView showsVerticalScrollIndicator={false}>
              {renderMonth()}
            </ScrollView>

            <View className="flex-row gap-3 mt-6">
              <TouchableOpacity
                className="flex-1 p-3 rounded-lg border border-sepia-300 items-center"
                onPress={() => {
                  onStartDateChange(null);
                  onEndDateChange(null);
                  setSelectingEnd(false);
                }}
              >
                <Typography className="text-sepia-800 font-bold">
                  Limpar
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 p-3 rounded-lg bg-burgundy-600 items-center"
                onPress={() => {
                  setModalVisible(false);
                  setSelectingEnd(false);
                }}
              >
                <Typography className="text-white font-bold">
                  Concluído
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
