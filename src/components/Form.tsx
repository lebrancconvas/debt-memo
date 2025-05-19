import "@/styles/form.css";

function Form() {
  return (
    <div id="form-container">
      <div id="form-header">
        <h1>New Debt</h1>
      </div>

      <form id="debt-form">
        <div className="debt-title">
          <label>Title</label>
          <input type="text" name="debt-title" id="form-title" />
        </div>
        <div className="debt-date">
          <label>Date</label>
          <input type="date" name="debt-date" id="form-date" />
        </div>
        <div className="debt-amount">
          <label>Amount</label>
          <input type="number" name="debt-amount" id="form-amount" />
        </div>
        <div className="debt-description">
          <label>Description</label>
          <input type="text" name="debt-description" id="form-description" />
        </div>

        <div className="submit">
          <button type="submit" id="form-submit">Add</button>
        </div>
      </form>
    </div>
  )
};

export default Form;
