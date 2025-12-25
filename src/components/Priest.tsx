import React, { useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Modal,
} from "react-native";
import { H1 } from "./Headings";
import { Typography } from "./typography";
import { burgundy } from "config";
import { api } from "convex/_generated/api";
import { Id } from "convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";

export const Priest = () => {
  const acceptRequest = useMutation(api.massRequests.accept);
  const rejectRequest = useMutation(api.massRequests.reject);
  const completeRequest = useMutation(api.massRequests.complete);
  const { signOut } = useAuthActions();
  const viewer = useQuery(api.users.viewer);

  const availableRequests = useQuery(
    api.massRequests.listAvailableForPriest,
    viewer?.role === "priest" ? { priestId: viewer._id } : "skip",
  );
  const totalPriestCount = useQuery(
    api.massRequests.getTotalPriestCount,
    viewer?.role === "priest" ? {} : "skip",
  );
  const myAcceptedRequests = useQuery(
    api.massRequests.listByPriest,
    viewer?.role === "priest" && viewer ? { priestId: viewer._id } : "skip",
  );
  const myScheduledDates = useQuery(
    api.massRequests.getPriestScheduledDates,
    viewer?.role === "priest" && viewer ? { priestId: viewer._id } : "skip",
  );

  async function handleAcceptRequest(
    requestId: Id<"massRequests">,
    date: Date,
  ) {
    if (!viewer) return;
    try {
      await acceptRequest({
        requestId,
        priestId: viewer._id,
        scheduledDate: date.getTime(),
      });
      Alert.alert(
        "Sucesso",
        "Missa aceite para " + date.toLocaleDateString("pt-PT"),
      );
    } catch (error) {
      Alert.alert(
        "Erro",
        error instanceof Error ? error.message : "Falha ao aceitar pedido",
      );
    }
  }

  async function handleRejectRequest(requestId: Id<"massRequests">) {
    if (!viewer) return;
    try {
      await rejectRequest({ requestId, priestId: viewer._id });
      Alert.alert("Sucesso", "Rejeição registada");
    } catch (error) {
      Alert.alert(
        "Erro",
        error instanceof Error ? error.message : "Falha ao rejeitar pedido",
      );
    }
  }

  async function handleCompleteRequest(requestId: Id<"massRequests">) {
    try {
      await completeRequest({ requestId });
      Alert.alert("Sucesso", "Missa marcada como celebrada");
    } catch (error) {
      Alert.alert("Erro", "Falha ao completar pedido");
    }
  }

  async function handleSignOut() {
    await signOut();
  }

  return (
    <ScrollView className="flex-1 p-5 medium-background pt-8">
      <H1 text="Painel do Clero" />

      <View className="mb-8">
        <Typography className="text-xl bold mb-4 text-sepia-800">
          Pedidos abertos
        </Typography>
        <PriestAvailableRequests
          requests={availableRequests}
          totalPriestCount={totalPriestCount}
          onAccept={handleAcceptRequest}
          onReject={handleRejectRequest}
        />
      </View>

      <View className="mb-12">
        <Typography className="text-xl bold mb-4 text-sepia-800">
          Minha Agenda
        </Typography>
        <PriestSchedule
          requests={myAcceptedRequests}
          scheduledDates={myScheduledDates}
          onComplete={handleCompleteRequest}
        />
      </View>

      <TouchableOpacity className="mb-20 items-center" onPress={handleSignOut}>
        <Typography className="text-burgundy-600 font-semibold underline">
          Terminar Sessão
        </Typography>
      </TouchableOpacity>
    </ScrollView>
  );
};

function PriestAvailableRequests({
  requests,
  totalPriestCount,
  onAccept,
  onReject,
}: {
  requests: any[] | undefined;
  totalPriestCount: number | undefined;
  onAccept: (requestId: Id<"massRequests">, date: Date) => void;
  onReject: (requestId: Id<"massRequests">) => void;
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedRequestId, setSelectedRequestId] =
    useState<Id<"massRequests"> | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  if (!requests) return <ActivityIndicator color={burgundy[500]} />;

  if (requests.length === 0) {
    return (
      <Typography className="text-sepia-500 text-center py-8 italic">
        Não há intenções aguardando celebração
      </Typography>
    );
  }

  const openDatePicker = (requestId: Id<"massRequests">, request: any) => {
    setSelectedRequestId(requestId);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (request.preferredStartDate) {
      const preferredStart = new Date(request.preferredStartDate);
      if (preferredStart > tomorrow) {
        setSelectedDate(preferredStart);
      } else {
        setSelectedDate(tomorrow);
      }
    } else {
      setSelectedDate(tomorrow);
    }

    setShowDatePicker(true);
  };

  const confirmDate = () => {
    if (selectedRequestId && selectedDate) {
      onAccept(selectedRequestId, selectedDate);
      setShowDatePicker(false);
      setSelectedRequestId(null);
      setSelectedDate(null);
    }
  };

  return (
    <>
      {requests.map((request) => (
        <View
          key={request._id}
          className="soft-background p-5 rounded-xl mb-4 border border-sepia-300 shadow-sm"
        >
          <Typography className="font-serif-bold text-lg text-sepia-900 mb-1">
            {request.intentionName}
          </Typography>
          <Typography className="text-sepia-600 text-xs mb-4">
            Solicitado em:{" "}
            {new Date(request._creationTime).toLocaleDateString("pt-PT")}
          </Typography>
          {request.preferredStartDate && (
            <Typography className="text-sepia-600 text-xs mb-4">
              Período preferido:{" "}
              {new Date(request.preferredStartDate).toLocaleDateString("pt-PT")}{" "}
              -{" "}
              {request.preferredEndDate
                ? new Date(request.preferredEndDate).toLocaleDateString("pt-PT")
                : "Sem data limite"}
            </Typography>
          )}
          <View className="flex-row gap-2">
            <TouchableOpacity
              className="bg-sepia-600 p-3 rounded-lg items-center flex-1"
              onPress={() => onReject(request._id)}
            >
              <Typography className="text-white bold text-sm">
                Sem disponibilidade
              </Typography>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-burgundy-700 p-3 rounded-lg items-center"
              onPress={() => openDatePicker(request._id, request)}
            >
              <Typography className="text-white bold text-sm">
                Aceitar Missa
              </Typography>
            </TouchableOpacity>
          </View>

          {request.rejectedByCount && totalPriestCount && (
            <Typography className="text-xs text-amber-600 mt-2 text-center italic">
              {request.rejectedByCount} de {totalPriestCount} sacerdotes sem
              disponibilidade
            </Typography>
          )}
        </View>
      ))}

      <Modal
        visible={showDatePicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowDatePicker(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-6 rounded-2xl w-80 shadow-lg">
            <Typography className="text-lg font-bold mb-4 text-center">
              Selecionar Data da Celebração
            </Typography>

            {selectedDate && (
              <View className="bg-sepia-100 p-4 rounded-xl mb-4">
                <Typography className="text-center text-2xl font-bold text-burgundy-700">
                  {selectedDate.toLocaleDateString("pt-PT")}
                </Typography>
              </View>
            )}

            <View className="flex-row gap-2">
              <TouchableOpacity
                className="flex-1 bg-gray-300 p-3 rounded-lg"
                onPress={() => setShowDatePicker(false)}
              >
                <Typography className="text-center font-semibold">
                  Cancelar
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 bg-burgundy-700 p-3 rounded-lg"
                onPress={confirmDate}
                disabled={!selectedDate}
              >
                <Typography className="text-center font-semibold text-white">
                  Confirmar
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

function PriestSchedule({
  requests,
  scheduledDates,
  onComplete,
}: {
  requests: any[] | undefined;
  scheduledDates: number[] | undefined;
  onComplete: (requestId: Id<"massRequests">) => void;
}) {
  if (!requests) return <ActivityIndicator color={burgundy[500]} />;

  return (
    <>
      {scheduledDates && scheduledDates.length > 0 && (
        <View className="bg-sepia-50 p-4 rounded-xl mb-4 border border-sepia-300">
          <Typography className="text-sm text-sepia-700 mb-2">
            Datas já agendadas:
          </Typography>
          <View className="flex-wrap gap-2">
            {scheduledDates.map((date, index) => (
              <View
                key={index}
                className="bg-white px-3 py-2 rounded-lg border border-sepia-200"
              >
                <Typography className="text-sm text-sepia-900">
                  {new Date(date).toLocaleDateString("pt-PT")}
                </Typography>
              </View>
            ))}
          </View>
        </View>
      )}

      {requests.length === 0 ? (
        <Typography className="text-sepia-500 text-center py-8 italic">
          Nenhuma missa aceite no momento
        </Typography>
      ) : (
        requests.map((request) => (
          <View
            key={request._id}
            className="soft-background p-5 rounded-xl mb-4 border-l-4 border-burgundy-600"
          >
            <Typography className="font-serif-bold text-base text-sepia-900 mb-2">
              {request.intentionName}
            </Typography>

            {request.scheduledDate && (
              <Typography className="text-sepia-700 text-xs mb-2">
                Data da Celebração:{" "}
                {new Date(request.scheduledDate).toLocaleDateString("pt-PT")}
              </Typography>
            )}

            <View className="flex-row justify-between items-center">
              <Typography
                className={`text-xs bold ${
                  request.status === "completed"
                    ? "text-green-700"
                    : request.status === "overdue"
                      ? "text-red-700"
                      : "text-burgundy-600"
                }`}
              >
                {request.status === "completed"
                  ? "✓ CELEBRADA"
                  : request.status === "overdue"
                    ? "⚠ EXPIRADA"
                    : "● AGENDADA"}
              </Typography>
              {request.status === "accepted" && (
                <TouchableOpacity
                  className="bg-sepia-200 px-4 py-2 rounded-lg border border-sepia-400"
                  onPress={() => onComplete(request._id)}
                >
                  <Typography className="text-sepia-900 bold text-xs">
                    Concluir
                  </Typography>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))
      )}
    </>
  );
}
