function StudyInfo({ title, desc, category }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{desc}</p>

      <p>
        <strong>분류 :</strong> {category}
      </p>
    </div>
  );
}

export default StudyInfo;
