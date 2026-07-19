function StudySummary({ summary, renderCount }) {
  return (
    <div className="summary">
      <h2>학습 통계</h2>

      <p>
        <strong>전체 항목 :</strong> {summary.total}
      </p>

      <p>
        <strong>현재 표시 :</strong> {summary.visible}
      </p>

      <p>
        <strong>즐겨찾기 :</strong> {summary.favorite}
      </p>

      <hr />

      <p>
        <strong>App 렌더링 횟수 :</strong> {renderCount}
      </p>
    </div>
  );
}

export default StudySummary;
