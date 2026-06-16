import { burgundy } from "config";
import { View } from "react-native";
import { Typography } from "~/components/typography";
import { useAppTheme } from "~/theme";

interface LiturgicalDateHeaderProps {
  overline: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  leftControl?: React.ReactNode;
  rightControl?: React.ReactNode;
  footer?: React.ReactNode;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingBottom?: number;
  titleSize?: number;
  subtitleSize?: number;
  centeredTitle?: boolean;
  bottomSpacing?: number;
}

export function LiturgicalDateHeader({
  overline,
  title,
  subtitle,
  leftControl,
  rightControl,
  footer,
  paddingHorizontal = 20,
  paddingTop = 8,
  paddingBottom = 10,
  titleSize = 28,
  subtitleSize = 12,
  centeredTitle = false,
  bottomSpacing = 6,
}: LiturgicalDateHeaderProps) {
  const { isDark, colors } = useAppTheme();

  return (
    <View
      style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.divider,
        paddingTop,
        paddingBottom,
        paddingHorizontal,
      }}
    >
      <Typography
        className="font-reading"
        style={{
          fontSize: 10,
          letterSpacing: 3.2,
          color: isDark ? burgundy[400] : burgundy[500],
          marginBottom: 6,
        }}
      >
        {overline}
      </Typography>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 6,
          alignSelf: "stretch",
          marginBottom: bottomSpacing,
        }}
      >
        {leftControl}

        <View
          style={{
            flex: 1,
            flexShrink: 1,
            minWidth: 0,
            alignItems: centeredTitle ? "center" : "flex-start",
          }}
        >
          {typeof title === "string" ? (
            <Typography
              className={`font-display leading-none ${centeredTitle ? "text-center" : ""}`}
              style={{
                fontSize: titleSize,
                color: colors.textSecondary,
              }}
              numberOfLines={1}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
        </View>

        {rightControl}
      </View>

      {subtitle ? (
        <Typography
          className="font-display-italic"
          style={{
            fontSize: subtitleSize,
            color: colors.textMuted,
          }}
        >
          {subtitle}
        </Typography>
      ) : null}

      {footer}
    </View>
  );
}
