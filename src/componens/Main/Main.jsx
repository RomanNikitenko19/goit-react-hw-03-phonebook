import PhoneBook from "../PhoneBook";
import style from "./Main.module.css";
const Main = () => {
  return (
    <>
      <section className={style.Main}>
        <div className={style.container}>
          <PhoneBook />
        </div>
      </section>
    </>
  );
};

export default Main;
