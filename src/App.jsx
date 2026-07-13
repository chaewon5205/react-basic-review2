import { useState } from "react";
import "./App.css";

import reactData from "./data/data.json";

import StudyInfo from "./components/StudyInfo";
import StudyList from "./components/StudyList";
import Filter from "./components/Filter";
import Search from "./components/Search";

function App() {
  // 선택된 목록
  const [selectedId, setSelectedId] = useState(null);

  // 카테고리
  const [category, setCategory] = useState("all");

  // 검색어
  const [keyword, setKeyword] = useState("");

  // 카테고리 + 검색 동시 적용
  const filteredData = reactData.filter(item => {
    const categoryMatch = category === "all" || item.category === category;

    const keywordMatch = item.title.toLowerCase().includes(keyword.toLowerCase());

    return categoryMatch && keywordMatch;
  });

  return (
    <div className="App">
      <h1>React Basic Review Mission 2</h1>

      <p className="count">전체 학습 항목 수 : {reactData.length}개</p>

      <hr />

      <h2 className="section-title">첫 번째 데이터 출력</h2>

      <StudyInfo title={reactData[0].title} desc={reactData[0].desc} category={reactData[0].category} />

      <hr />

      <h2 className="section-title">카테고리 필터</h2>

      <Filter category={category} setCategory={setCategory} />

      <hr />

      <h2 className="section-title">검색</h2>

      <Search keyword={keyword} setKeyword={setKeyword} />

      <hr />

      <h2 className="section-title">학습 목록</h2>

      <StudyList items={filteredData} selectedId={selectedId} onSelect={setSelectedId} />
    </div>
  );
}

export default App;
