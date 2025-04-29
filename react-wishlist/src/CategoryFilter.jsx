function CategoryFilter(props) {
  return (
    <div>
      <select
        onChange={(e) => props.selectedChangeValue(e.target.value)}
        value={props.selected}
        className="filter-choice form-select"
        name="filter"
        id="filter-price-select"
      >
        <option className="filter" value="filter">
          {" "}
          Filter
        </option>
        <option className="filter-price-1" value="filter-price-1">
          Category 1
        </option>
        <option className="filter-price-2" value="filter-price-2">
          Category 2
        </option>
        <option className="filter-price-3" value="filter-price-3">
          Category 3
        </option>
      </select>
    </div>
  );
}
export default CategoryFilter;
