import { memo } from "react";

function StudyItem({ item, isFavorite, onToggleFavorite }) {
  return (
    <div className={isFavorite ? "card favorite" : "card"}>
      <h3>
        {item.id}. {item.title}
      </h3>

      <p>{item.desc}</p>

      <p>
        <strong>카테고리 :</strong> {item.category}
      </p>

      <p>
        <strong>난이도 :</strong> {item.level}
      </p>

      <button className="favorite-btn" onClick={() => onToggleFavorite(item.id)}>
        {isFavorite ? "★ 즐겨찾기 해제" : "☆ 즐겨찾기 추가"}
      </button>
    </div>
  );
}

export default memo(StudyItem);
