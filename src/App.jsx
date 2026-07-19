import { useState, useMemo, useCallback, useRef, useEffect } from "react";

import "./App.css";

import reactData from "./data/data.json";

import SearchForm from "./components/SearchForm";
import CategoryFilter from "./components/CategoryFilter";
import StudySummary from "./components/StudySummary";
import StudyList from "./components/StudyList";

function App() {
  // 검색어
  const [keyword, setKeyword] = useState("");

  // 카테고리
  const [category, setCategory] = useState("all");

  // 즐겨찾기
  const [favoriteIds, setFavoriteIds] = useState([]);

  // 즐겨찾기만 보기
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  // 검색창
  const searchInputRef = useRef(null);

  // 렌더링 횟수
  const renderCount = useRef(0);

  renderCount.current += 1;

  // 첫 화면에서 검색창 포커스
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // 검색창으로 이동
  const handleFocusSearch = () => {
    searchInputRef.current.focus();
  };

  // 즐겨찾기 토글
  const handleToggleFavorite = useCallback(id => {
    setFavoriteIds(prev => (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]));
  }, []);

  // 필터링
  const filteredData = useMemo(() => {
    return reactData.filter(item => {
      const keywordMatch = item.title.toLowerCase().includes(keyword.toLowerCase());

      const categoryMatch = category === "all" || item.category === category;

      const favoriteMatch = !favoriteOnly || favoriteIds.includes(item.id);

      return keywordMatch && categoryMatch && favoriteMatch;
    });
  }, [keyword, category, favoriteOnly, favoriteIds]);

  // 통계
  const summary = useMemo(() => {
    return {
      total: reactData.length,
      visible: filteredData.length,
      favorite: favoriteIds.length,
    };
  }, [filteredData, favoriteIds]);

  return (
    <div className="App">
      <h1>React Basic Review Mission 8</h1>

      <h2>React Hooks 학습 목록 관리</h2>

      <SearchForm
        keyword={keyword}
        setKeyword={setKeyword}
        searchInputRef={searchInputRef}
        onFocus={handleFocusSearch}
      />

      <CategoryFilter category={category} setCategory={setCategory} />

      <button className="favorite-only" onClick={() => setFavoriteOnly(!favoriteOnly)}>
        {favoriteOnly ? "전체 항목 보기" : "즐겨찾기만 보기"}
      </button>

      <StudySummary summary={summary} renderCount={renderCount.current} />

      <StudyList items={filteredData} favoriteIds={favoriteIds} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}

export default App;
