// headings.tsx
import { Text } from "react-native";
import { useFontContext } from "~/providers/fonts"; // Assumindo o teu path; ajusta se necessário.

type FontSize = "small" | "medium" | "large"; // Alinha com o teu contexto.

type HeadingProps = {
  text: string;
  id?: string;
  className?: string; // Opcional para overrides.
};

// Mapas de tamanhos: Proporcionais ao contexto, como escalas pitagóricas.
const H1_SIZE: Record<FontSize, string> = {
  small: "text-2xl",
  medium: "text-3xl",
  large: "text-4xl",
};
const H2_SIZE: Record<FontSize, string> = {
  small: "text-xl",
  medium: "text-2xl",
  large: "text-3xl",
};
const H3_SIZE: Record<FontSize, string> = {
  small: "text-lg",
  medium: "text-xl",
  large: "text-2xl",
};
const H4_SIZE: Record<FontSize, string> = {
  small: "text-base",
  medium: "text-lg",
  large: "text-xl",
};
const H5_SIZE: Record<FontSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};
const H6_SIZE: Record<FontSize, string> = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-base",
};

// Função utilitária: Gera ID para anchors, determinística e imutável.
function useHeadingId(text: string, id?: string): string {
  return (
    id ||
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  );
}

// H1: Primária, com cor primária (burgundy).
export function H1({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      className={`font-display text-center text-primary dark:text-primary-dark py-6 ${H1_SIZE[fontSize]} ${className}`}
      // Depuração temporária: Força a fonte via inline para testar carregamento.
      // style={{ fontFamily: 'DMSerifDisplay_400Regular' }} — Remove após sucesso.
      // Razão: Se inline funcionar mas classe não, o @utility falha; ajusta nome exato.
    >
      {text}
    </Text>
  );
}

// H2: Secundária, similar a H1.
export function H2({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      className={`font-display text-center text-primary dark:text-primary-dark py-5 ${H2_SIZE[fontSize]} ${className}`}
      // style={{ fontFamily: 'DMSerifDisplay_400Regular' }} — Debug, se necessário.
    >
      {text}
    </Text>
  );
}

// H3: Terciária, com foreground.
export function H3({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      className={`font-display text-center text-foreground dark:text-foreground-dark py-4 ${H3_SIZE[fontSize]} ${className}`}
      // style={{ fontFamily: 'DMSerifDisplay_400Regular' }}
    >
      {text}
    </Text>
  );
}

// H4: Quaternária.
export function H4({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      className={`font-display text-center text-foreground dark:text-foreground-dark py-3 ${H4_SIZE[fontSize]} ${className}`}
      // style={{ fontFamily: 'DMSerifDisplay_400Regular' }}
    >
      {text}
    </Text>
  );
}

// H5: Quinquenária.
export function H5({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      className={`font-display text-center text-foreground dark:text-foreground-dark py-2 ${H5_SIZE[fontSize]} ${className}`}
      // style={{ fontFamily: 'DMSerifDisplay_400Regular' }}
    >
      {text}
    </Text>
  );
}

// H6: Sextenária, agora com font-display corrigido.
export function H6({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      className={`font-display text-center text-foreground dark:text-foreground-dark py-1 ${H6_SIZE[fontSize]} ${className}`}
      // style={{ fontFamily: 'DMSerifDisplay_400Regular' }} — Crucial para H6.
    >
      {text}
    </Text>
  );
}
