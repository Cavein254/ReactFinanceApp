import React from "react";
import "./aside.css";
export default function Aside() {
  return (
    <>
      <aside>
        <form>
          <div className="form-group">
            <label htmlFor="stocksymbol">Enter Stock Symbol</label>
            <input type="text" placeholder="Stock Symbol" />
            <button type="submit">Search</button>
          </div>
        </form>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <nav>
            <ul className="link-item">
              <li>
                <a href="http://seekingalpha.com/" className="link">
                  Seeking Alpha
                </a>
              </li>
              <li>
                <a href="https://www.bloomberg.com/markets" className="link">
                  Bloomberg
                </a>
              </li>
              <li>
                <a href="https://www.forbes.com/money/" className="link">
                  Forbes
                </a>
              </li>
              <li>
                <a href="http://www.mymoney.gov/" className="link">
                  MyMoney
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
