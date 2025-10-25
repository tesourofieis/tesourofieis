import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { useCalendar } from "~/providers/calendar";
import LinkCard from "~/components/LinkCard";
import { Mass } from "@tesourofieis/cal/observanceManager";

const LOAD_MORE_COUNT = 10;

type MassWithDate = {
  id: string;
  date: string; // yyyyMMDD
  mass: Mass;
};

export default function SimpleLiturgicalList() {
  const { calendar, date } = useCalendar();
  const todayString = yyyyMMDD(date);

  // Construir a lista platónica de todas as missas (ordenada ascendente por date)
  const allMasses: MassWithDate[] = useMemo(() => {
    const out: MassWithDate[] = [];
    for (const day of calendar) {
      if (!day?.mass?.length) continue;
      for (const m of day.mass) {
        out.push({
          id: `${day.date}#${m.id}`,
          date: day.date,
          mass: m,
        });
      }
    }
    out.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
    return out;
  }, [calendar]);

  // intervalo inicial: as missas de hoje (se houver), senão posiciona perto de hoje
  const initialWindow = useMemo(() => {
    if (allMasses.length === 0) return { start: 0, end: -1 };
    const firstToday = allMasses.findIndex((x) => x.date === todayString);
    if (firstToday === -1) {
      const insert = allMasses.findIndex((x) => x.date > todayString);
      const idx = insert === -1 ? Math.max(0, allMasses.length - 1) : insert;
      // mostramos um pequeno bloco centrado nesse idx
      const start = Math.max(0, idx - Math.floor(LOAD_MORE_COUNT / 2));
      const end = Math.min(allMasses.length - 1, start + LOAD_MORE_COUNT - 1);
      return { start, end };
    } else {
      let last = firstToday;
      while (last + 1 < allMasses.length && allMasses[last + 1].date === todayString) last++;
      // mostra as missas de hoje; se demasiadas, limita em LOAD_MORE_COUNT
      const start = Math.max(0, firstToday - Math.floor(LOAD_MORE_COUNT / 3));
      const end = Math.min(allMasses.length - 1, last + Math.floor(LOAD_MORE_COUNT / 3));
      return { start, end };
    }
  }, [allMasses, todayString]);

  const [window, setWindow] = useState<{ start: number; end: number }>(initialWindow);

  const listRef = useRef<FlatList<MassWithDate> | null>(null);

  // flag para evitar loads concorrentes ao rolar
  const isLoadingRef = useRef(false);
  const lastLoadAt = useRef(0);

  const loadMorePast = () => {
    if (isLoadingRef.current) return;
    if (window.start <= 0) return;
    isLoadingRef.current = true;
    setWindow((w) => {
      const newStart = Math.max(0, w.start - LOAD_MORE_COUNT);
      // mantém o mesmo end; o FlatList, com maintainVisibleContentPosition, preservará o item visível
      return { start: newStart, end: w.end };
    });
    // debounce simples
    setTimeout(() => {
      isLoadingRef.current = false;
      lastLoadAt.current = Date.now();
    }, 250);
  };

  const loadMoreFuture = () => {
    if (isLoadingRef.current) return;
    if (window.end >= allMasses.length - 1) return;
    isLoadingRef.current = true;
    setWindow((w) => {
      const newEnd = Math.min(allMasses.length - 1, w.end + LOAD_MORE_COUNT);
      return { start: w.start, end: newEnd };
    });
    setTimeout(() => {
      isLoadingRef.current = false;
      lastLoadAt.current = Date.now();
    }, 200);
  };

  const rendered = useMemo(() => {
    if (allMasses.length === 0) return [];
    const s = Math.max(0, Math.min(window.start, allMasses.length - 1));
    const e = Math.max(-1, Math.min(window.end, allMasses.length - 1));
    if (e < s) return [];
    return allMasses.slice(s, e + 1);
  }, [allMasses, window]);

  // render item
  const renderItem = ({ item }: ListRenderItemInfo<MassWithDate>) => {
    if (LinkCard) return <LinkCard mass={item.mass} />;
    return (
      <View style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee", backgroundColor: "white" }}>
        <Text style={{ fontWeight: "700" }}>{item.mass.name}</Text>
        <Text style={{ color: "#666", marginTop: 4 }}>{item.mass.local ?? ""}</Text>
        <Text style={{ color: "#999", marginTop: 4 }}>{format(new Date(`${item.date.slice(0, 4)}-${item.date.slice(4, 6)}-${item.date.slice(6, 8)}`), "dd/MM/yyyy", { locale: pt })}</Text>
      </View>
    );
  };

  // onScroll: se perto do topo, pede mais (com guardas)
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    if (offsetY < 120 && !isLoadingRef.current && Date.now() - lastLoadAt.current > 300) {
      if (window.start > 0) loadMorePast();
    }
  };

  // onEndReached para carregar mais futuros
  const handleEndReached = () => {
    if (!isLoadingRef.current) loadMoreFuture();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fbf7f3" }}>
      <FlatList
        ref={(r) => (listRef.current = r)}
        data={rendered}
        renderItem={renderItem}
        keyExtractor={(it) => it.id}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.4}
        // Preserve a posição visível quando fazemos prepend (new items no início)
        maintainVisibleContentPosition={{ minIndexForVisible: 1 }}
        // pequenas optimizações
        initialNumToRender={10}
        windowSize={11}
        ListEmptyComponent={
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ color: "#6b5f57", marginBottom: 8 }}>Hoje não tem missas registadas.</Text>
            <Text style={{ color: "#999" }}>Carrega "Carregar mais antigas" ou "Mostrar tudo" para ver outras datas.</Text>
          </View>
        }
      />
    </View>
  );
}
