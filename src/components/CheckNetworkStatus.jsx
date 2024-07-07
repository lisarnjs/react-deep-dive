import useOnlineStatus from "../hooks/useOnlineStatus";

export default function CheckNetworkStatus() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      {isOnline
        ? "✅ 온라인 : 네트워크가 정상 연결되었습니다."
        : "❌ 연결 안 됨 : 네트워크 연결이 불안정합니다."}
    </div>
  );
}
