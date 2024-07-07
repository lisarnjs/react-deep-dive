import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    alert("✅ 온라인 : 진행사항 저장");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "진행사항 저장하기" : "재연결 중..."}
    </button>
  );
}
