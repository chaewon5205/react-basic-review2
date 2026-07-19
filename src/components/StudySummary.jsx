function StudySummary({ summary, renderCount }) {
  return (
    <div className="summary">
      <div>전체 항목 : {summary.total}개</div>

      <div>현재 표시 : {summary.visible}개</div>

      <div>즐겨찾기 : {summary.favorite}개</div>

      <div>App 렌더링 횟수 : {renderCount}회</div>
    </div>
  );
}

export default StudySummary;
