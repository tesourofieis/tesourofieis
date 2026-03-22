import { X } from "lucide-react-native";
import { Modal, View, TouchableOpacity } from "react-native";
import { Typography } from "./typography";

export function PickerModal({
  visible,
  onClose,
  title,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 justify-end bg-black/50">
        <View className="medium-background rounded-t-3xl p-6">
          <View className="flex-row justify-between items-center mb-6">
            <Typography className="text-xl font-bold text-sepia-900">{title}</Typography>
            <TouchableOpacity onPress={onClose} className="p-2">
              <X size={24} color="#7c2d12" />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}
