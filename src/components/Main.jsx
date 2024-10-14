import React from 'react';

const Main = () => {
  return (
    <main>
      <section id="home">
        <h2>Ласкаво просимо до мого блогу!</h2>
        <p>Тут ви знайдете багато цікавого.</p>
      </section>
      <section id="about">
        <h2>Про мене</h2>
        <p>Тут розповідається про мене та мої інтереси.</p>
      </section>
      <section id="blog">
        <h2>Мій блог</h2>
        <p>Ось кілька останніх публікацій.</p>
        {/* Можеш динамічно додавати пости тут */}
      </section>
      <section id="contact">
        <h2>Контакти</h2>
        <p>Контактна інформація.</p>
      </section>
    </main>
  );
};

export default Main;