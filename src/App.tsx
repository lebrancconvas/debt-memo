import Action from "@/components/Action";
import Form from "@/components/Form";
import List from "@/components/List";

import "@/styles/index.css";

export function App() {

  return (
    <>
      <header>
        <h1>Debt Memo</h1>
      </header>
      <section id="action">
        <Action />
      </section>
      <section id="form">
        <Form />
      </section>
      <section id="list">
        <List />
      </section>
      <footer>
        <p>Made by <a href="https://github.com/lebrancconvas" target="_blank">Poom Yimyuean (@lebrancconvas)</a> in 2025</p>
      </footer>
    </>
  )
};

