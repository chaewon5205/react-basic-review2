function StudyInfo({ title, desc, category }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <p>{desc}</p>

      <p>
        <strong>분류 :</strong> {category}
      </p>
    </div>
  );
}

export default StudyInfo;
