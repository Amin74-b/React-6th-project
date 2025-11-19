function Filter({ setTitleFilter, setRateFilter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min rating"
        onChange={(e) => setRateFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;

