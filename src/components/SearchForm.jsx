function SearchForm({ keyword, setKeyword, searchInputRef, onFocus }) {
  return (
    <div className="search-wrap">
      <input
        ref={searchInputRef}
        className="search-input"
        type="text"
        placeholder="학습 항목 검색"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />

      <button className="search-btn" onClick={onFocus}>
        검색창으로 이동
      </button>

      <button className="reset-btn" onClick={() => setKeyword("")}>
        초기화
      </button>
    </div>
  );
}

export default SearchForm;
