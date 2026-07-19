import { memo } from "react";

function StudyItem({ item, isFavorite, onToggleFavorite }) {
  return (
    <div className={isFavorite ? "card favorite" : "card"}>
      <div className="card-content">
        <div className="card-info">
          <h3>{item.title}</h3>

          <p>{item.desc}</p>

          <p className="meta">
            분류: {item.category} / 난이도: {item.level}
          </p>
        </div>

        <button className="favorite-btn" onClick={() => onToggleFavorite(item.id)}>
          {isFavorite ? "★ 즐겨찾기" : "☆ 즐겨찾기"}
        </button>
      </div>
    </div>
  );
}

export default memo(StudyItem);
