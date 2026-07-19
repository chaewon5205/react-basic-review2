function CategoryFilter({ category, setCategory }) {
  return (
    <div className="filter">
      <button className={category === "all" ? "selected-btn" : ""} onClick={() => setCategory("all")}>
        전체
      </button>

      <button className={category === "concept" ? "selected-btn" : ""} onClick={() => setCategory("concept")}>
        concept
      </button>

      <button className={category === "library" ? "selected-btn" : ""} onClick={() => setCategory("library")}>
        library
      </button>

      <button className={category === "hook" ? "selected-btn" : ""} onClick={() => setCategory("hook")}>
        hook
      </button>
    </div>
  );
}

export default CategoryFilter;
