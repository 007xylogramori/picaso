import { useState } from "react";
import './searchbar.css'
function Searchbar({ onSubmit }) {

  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value)
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input value={term} placeholder="Enter search here" onChange={handleChange} />
      </form>
    </div>
  );
}
export default Searchbar;
