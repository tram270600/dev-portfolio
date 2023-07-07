import "./SayHello.scss";
export default function SayHello() {
  return (
    <div className="text-2xl md:text-4xl content">
      <div className="content__container">
        <p className="content__container__text">Hello</p>

        <ul className="content__container__list pl-20 md:pl-28">
          <li className="content__container__list__item">world !</li>
          <li className="content__container__list__item">everybody !</li>
          <li className="content__container__list__item">there !</li>
          <li className="content__container__list__item">visitor !</li>
        </ul>
      </div>
    </div>
  );
}
