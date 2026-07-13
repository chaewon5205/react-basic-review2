function Search({ keyword, setKeyword }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="제목을 입력하세요."
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default Search;
