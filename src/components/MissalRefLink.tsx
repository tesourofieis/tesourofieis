import { Link, type LinkProps } from "expo-router";
import type { ReactNode } from "react";
import type { StyleProp, TextStyle } from "react-native";

/**
 * Inline cross-reference link used inside liturgical prose
 * (e.g. "Como na Missa In médio Ecclésiae, excepto:").
 *
 * Why a wrapper instead of `className="link"` alone:
 *   React Native's text engine does not support
 *   `text-decoration-thickness` or `text-underline-offset`, so a CSS-only
 *   underline on mobile is a hairline flush against italic glyphs — easy to
 *   miss. This component sets `textDecorationLine: "underline"` via an
 *   inline style that the native renderer respects, while the `className`
 *   still provides the color (which NativeWind compiles to RN on both
 *   platforms).
 *
 * Use this everywhere a link sits *inline* in a `Typography` paragraph.
 * For block-level navigation (cards, list rows) keep using `expo-router`'s
 * `Link` directly — see `LinkCard.tsx`.
 */
type MissalRefLinkProps = LinkProps & {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

const UNDERLINE_STYLE: TextStyle = {
  textDecorationLine: "underline",
};

export function MissalRefLink({ children, style, ...rest }: MissalRefLinkProps) {
  return (
    <Link {...rest} className="link" style={[UNDERLINE_STYLE, style]}>
      {children}
    </Link>
  );
}

MissalRefLink.displayName = "MissalRefLink";
