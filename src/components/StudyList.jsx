import StudyItem from "./StudyItem";

function StudyList({ items, favoriteIds, onToggleFavorite }) {
  if (items.length === 0) {
    return <p className="no-result">검색 결과가 없습니다.</p>;
  }

  return (
    <div className="study-list">
      {items.map(item => (
        <StudyItem
          key={item.id}
          item={item}
          isFavorite={favoriteIds.includes(item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default StudyList;
