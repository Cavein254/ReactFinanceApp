import React from "react";
import "./aside.css";
export default function Aside() {
  return (
    <>
      <aside>
        <form>
          <div class="form-group">
            <label htmlFor="stocksymbol">Enter Stock Symbol</label>
            <input type="text" placeholder="Stock Symbol" />
            <button type="submit">Search</button>
          </div>
        </form>
        <div class="quick-links">
          <h4>Quick Links</h4>
          <nav>
            <ul class="link-item">
              <li>
                <a href="http://seekingalpha.com/" class="link">
                  Seeking Alpha
                </a>
              </li>
              <li>
                <a href="https://www.bloomberg.com/markets" class="link">
                  Bloomberg
                </a>
              </li>
              <li>
                <a href="https://www.forbes.com/money/" class="link">
                  Forbes
                </a>
              </li>
              <li>
                <a href="http://www.mymoney.gov/" class="link">
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
