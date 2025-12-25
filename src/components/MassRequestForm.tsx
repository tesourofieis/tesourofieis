import React, { useState } from "react";
import {
  Alert,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DateRangePicker } from "./DateRangePicker";
import { H6 } from "./Headings";
import { Typography } from "./typography";
import { MassRequestDraft } from "./User";
import { Minus, Plus } from "lucide-react-native";
import { PickerModal } from "./PickerModal";

const SUGGESTED_STIPEND = 1500;
const MINIMUM_STIPEND = 1000;

export function MassRequestForm({
  onAdd,
}: {
  onAdd: (draft: MassRequestDraft) => void;
}) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [stipendCents, setStipendCents] = useState(SUGGESTED_STIPEND);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleAdd = () => {
    if (!title.trim() && !details.trim()) {
      return Alert.alert(
        "Informação em falta",
        "Por favor, indique pelo menos o título ou mais detalhes",
      );
    }

    if (stipendCents < MINIMUM_STIPEND) {
      return Alert.alert(
        "Valor mínimo",
        "A oferta por missa deve ser de pelo menos €" +
          (MINIMUM_STIPEND / 100).toFixed(2),
      );
    }

    onAdd({
      title: title.trim(),
      details: details.trim(),
      quantity,
      stipendCents,
      startDate,
      endDate,
    });

    setTitle("");
    setDetails("");
    setQuantity(1);
    setStipendCents(SUGGESTED_STIPEND);
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <View className="my-5 soft-background p-5 rounded-2xl border border-sepia-300 shadow-sm gap-4">
      <H6 text="Pedido de Missa" />
      <Typography className="aside text-sepia-700">
        A oferta é voluntária e destina-se ao sustento do clero, conforme o
        costume aprovado pela Igreja. Sugerimos €{SUGGESTED_STIPEND / 100} por
        missa (estipêndio habitual), mas pode oferecer o valor que desejar, com
        um mínimo de €{MINIMUM_STIPEND / 100} por missa para cobrir custos
        administrativos.
      </Typography>

      <TextInput
        className="medium-background w-full p-4 rounded-lg border border-sepia-200 text-sepia"
        placeholder="Título (ex: Pelo eterno descanso de...)"
        placeholderTextColor="#928374"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        className="medium-background w-full p-4 rounded-lg border border-sepia-200 text-sepia"
        placeholder="Mais detalhes (opcional)"
        placeholderTextColor="#928374"
        value={details}
        onChangeText={setDetails}
        multiline
        numberOfLines={3}
      />

      <View className="flex-row gap-4">
        <View className="flex-1">
          <Typography className="text-base mb-2 text-sepia-800">
            Quantidade:
          </Typography>
          <QuantityPicker value={quantity} onChange={setQuantity} />
        </View>

        <View className="flex-1">
          <Typography className="text-base mb-2 text-sepia-800">
            Oferta:
          </Typography>
          <StipendPicker value={stipendCents} onChange={setStipendCents} />
        </View>
      </View>

      <View>
        <Typography className="text-base mb-2 text-sepia-800">
          Período (opcional):
        </Typography>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          minimumDate={new Date()}
        />
      </View>

      <TouchableOpacity
        className={`${!title && !details ? "bg-sepia-500" : "red-background"} p-4 rounded-xl items-center shadow-sm`}
        disabled={!title && !details}
        onPress={handleAdd}
      >
        <Typography className="text-sepia bold text-base">Adicionar</Typography>
      </TouchableOpacity>
    </View>
  );
}

function StipendPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState(value);
  const min = 1000;
  const max = 10000;

  const confirm = () => {
    onChange(temp);
    setShow(false);
  };

  return (
    <>
      <TouchableOpacity
        className="medium-background w-full p-4 rounded-lg border border-sepia-200"
        onPress={() => {
          setTemp(value);
          setShow(true);
        }}
      >
        <Typography className="text-sepia">
          €{(value / 100).toFixed(2)}
        </Typography>
      </TouchableOpacity>

      <PickerModal
        visible={show}
        onClose={() => setShow(false)}
        title="Oferta por missa"
      >
        <View className="bg-sepia-100 rounded-2xl p-6 mb-6 items-center">
          <Typography className="text-4xl font-bold text-burgundy-700">
            €{(temp / 100).toFixed(2)}
          </Typography>
        </View>

        <View className="flex-row justify-center items-center gap-6 mb-6">
          <TouchableOpacity
            className={`w-16 h-16 rounded-full items-center justify-center ${temp > min ? "bg-burgundy-600" : "bg-sepia-300 opacity-50"}`}
            onPress={() => temp > min && setTemp(temp - 50)}
            disabled={temp <= min}
          >
            <Minus size={24} color="white" />
          </TouchableOpacity>

          <View className="flex-1 max-w-32">
            <Typography className="text-center text-sepia-600 text-sm">
              €{(min / 100).toFixed(2)} - €{(max / 100).toFixed(2)}
            </Typography>
          </View>

          <TouchableOpacity
            className={`w-16 h-16 rounded-full items-center justify-center ${temp < max ? "bg-burgundy-600" : "bg-sepia-300 opacity-50"}`}
            onPress={() => temp < max && setTemp(temp + 50)}
            disabled={temp >= max}
          >
            <Plus size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Typography className="text-sm font-semibold text-sepia-700 mb-3">
            Seleção rápida:
          </Typography>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2">
              {[5, 8, 10, 11, 15, 20, 25, 50].map((euros) => (
                <TouchableOpacity
                  key={euros}
                  className={`px-4 py-2 rounded-lg border ${temp === euros * 100 ? "bg-burgundy-600 border-burgundy-600" : "bg-sepia-100 border-sepia-300"}`}
                  onPress={() => setTemp(euros * 100)}
                >
                  <Typography
                    className={`font-semibold ${temp === euros * 100 ? "text-white" : "text-sepia-800"}`}
                  >
                    €{euros}
                  </Typography>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View className="flex-row gap-3">
          <TouchableOpacity
            className="flex-1 p-4 rounded-lg border border-sepia-300 items-center"
            onPress={() => setShow(false)}
          >
            <Typography className="text-sepia-800 font-bold">
              Cancelar
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 p-4 rounded-lg bg-burgundy-600 items-center"
            onPress={confirm}
          >
            <Typography className="text-white font-bold">Confirmar</Typography>
          </TouchableOpacity>
        </View>
      </PickerModal>
    </>
  );
}

function QuantityPicker({
  value,
  onChange,
  min = 1,
  max = 30,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
}) {
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState(value);

  const confirm = () => {
    onChange(temp);
    setShow(false);
  };

  return (
    <>
      <TouchableOpacity
        className="medium-background w-full p-4 rounded-lg border border-sepia-200"
        onPress={() => {
          setTemp(value);
          setShow(true);
        }}
      >
        <Typography className="text-sepia">
          {value} {value === 1 ? "missa" : "missas"}
        </Typography>
      </TouchableOpacity>

      <PickerModal
        visible={show}
        onClose={() => setShow(false)}
        title="Quantidade de missas"
      >
        <View className="bg-sepia-100 rounded-2xl p-6 mb-6 items-center">
          <Typography className="text-4xl font-bold text-burgundy-700 mb-2">
            {temp}
          </Typography>
          <Typography className="text-sm text-sepia-600">
            {temp === 1 ? "missa" : "missas"}
          </Typography>
        </View>

        <View className="flex-row justify-center items-center gap-6 mb-6">
          <TouchableOpacity
            className={`w-16 h-16 rounded-full items-center justify-center ${temp > min ? "bg-burgundy-600" : "bg-sepia-300 opacity-50"}`}
            onPress={() => temp > min && setTemp(temp - 1)}
            disabled={temp <= min}
          >
            <Minus size={24} color="white" />
          </TouchableOpacity>

          <View className="flex-1 max-w-32">
            <Typography className="text-center text-sepia-600 text-sm">
              {min} - {max}
            </Typography>
          </View>

          <TouchableOpacity
            className={`w-16 h-16 rounded-full items-center justify-center ${temp < max ? "bg-burgundy-600" : "bg-sepia-300 opacity-50"}`}
            onPress={() => temp < max && setTemp(temp + 1)}
            disabled={temp >= max}
          >
            <Plus size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Typography className="text-sm font-semibold text-sepia-700 mb-3">
            Seleção rápida:
          </Typography>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2">
              {[1, 3, 5, 10, 15, 20, 25, 30].map((n) => (
                <TouchableOpacity
                  key={n}
                  className={`px-4 py-2 rounded-lg border ${temp === n ? "bg-burgundy-600 border-burgundy-600" : "bg-sepia-100 border-sepia-300"}`}
                  onPress={() => setTemp(n)}
                >
                  <Typography
                    className={`font-semibold ${temp === n ? "text-white" : "text-sepia-800"}`}
                  >
                    {n}
                  </Typography>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View className="flex-row gap-3">
          <TouchableOpacity
            className="flex-1 p-4 rounded-lg border border-sepia-300 items-center"
            onPress={() => setShow(false)}
          >
            <Typography className="text-sepia-800 font-bold">
              Cancelar
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 p-4 rounded-lg bg-burgundy-600 items-center"
            onPress={confirm}
          >
            <Typography className="text-white font-bold">Confirmar</Typography>
          </TouchableOpacity>
        </View>
      </PickerModal>
    </>
  );
}
