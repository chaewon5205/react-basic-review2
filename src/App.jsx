import { useState, useMemo, useCallback, useRef, useEffect } from "react";

import "./App.css";

import reactData from "./data/data.json";

import SearchForm from "./components/SearchForm";
import CategoryFilter from "./components/CategoryFilter";
import StudySummary from "./components/StudySummary";
import StudyList from "./components/StudyList";

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const searchInputRef = useRef(null);

  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleFocusSearch = () => {
    searchInputRef.current.focus();
  };

  const handleToggleFavorite = useCallback(id => {
    setFavoriteIds(prev => (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]));
  }, []);

  const filteredData = useMemo(() => {
    return reactData.filter(item => {
      const keywordMatch = item.title.toLowerCase().includes(keyword.toLowerCase());

      const categoryMatch = category === "all" || item.category === category;

      const favoriteMatch = !favoriteOnly || favoriteIds.includes(item.id);

      return keywordMatch && categoryMatch && favoriteMatch;
    });
  }, [keyword, category, favoriteOnly, favoriteIds]);

  const summary = useMemo(() => {
    return {
      total: reactData.length,
      visible: filteredData.length,
      favorite: favoriteIds.length,
    };
  }, [filteredData, favoriteIds]);

  return (
    <div className="App">
      <header className="header">
        <p className="mission">React Basic Review Mission 8</p>

        <h1>React Hooks 학습 목록 관리</h1>

        <p className="description">useState, useMemo, useCallback, useRef를 활용한 복습 미션입니다.</p>
      </header>

      <section>
        <h2 className="section-title">검색</h2>

        <SearchForm
          keyword={keyword}
          setKeyword={setKeyword}
          searchInputRef={searchInputRef}
          onFocus={handleFocusSearch}
        />
      </section>

      <section>
        <h2 className="section-title">카테고리 필터</h2>

        <CategoryFilter category={category} setCategory={setCategory} />

        <button className="favorite-only" onClick={() => setFavoriteOnly(!favoriteOnly)}>
          {favoriteOnly ? "전체 항목 보기" : "즐겨찾기만 보기"}
        </button>
      </section>

      <StudySummary summary={summary} renderCount={renderCount.current} />

      <section>
        <h2 className="section-title">학습 목록</h2>

        <StudyList items={filteredData} favoriteIds={favoriteIds} onToggleFavorite={handleToggleFavorite} />
      </section>
    </div>
  );
}

export default App;
