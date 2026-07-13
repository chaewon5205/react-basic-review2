function StudyList({ items, selectedId, onSelect }) {
  return (
    <div>
      {items.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        items.map(item => (
          <div
            key={item.id}
            className={selectedId === item.id ? "card active" : "card"}
            onClick={() => onSelect(item.id)}
          >
            <h3>
              {item.id}. {item.title}
            </h3>

            <p>{item.desc}</p>

            <p>
              <strong>분류 :</strong> {item.category}
            </p>

            {selectedId === item.id && <p className="selected"> 선택된 항목입니다.</p>}
          </div>
        ))
      )}
    </div>
  );
}

export default StudyList;
