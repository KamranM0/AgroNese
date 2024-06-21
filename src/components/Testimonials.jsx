import { Element } from "react-scroll";
import styles from "./Testimonials.module.css";
function Testimonials() {
  const items = [
    {
      user: "Məzahir Məmmədov",
      loc: "Cəlilabad, Ağdaş kəndi",
      comment:
        "Bu proqram möhtəşəmdir! Çətin işimizi bütün funksiyaları bir yerə toplamaqla çox asanlaşdırır. Fermam həmişəkindən çox daha məhsuldardır! Hər kəsə tövsiyə edirəm.🌾🚜📱",
      color: "#6FC0DB",
    },

    {
      user: "Firudin Qasımov",
      loc: "Masallı, Qızılağac kəndi",
      comment:
        "AgroNese sayəsində bütün əkinlərimi, həmçinin hava proqnozunu rahatlıqla izləyə bilirəm. Nəsə problem yarananda ekspertlər yorulmadan köməklik göstərir. Yükləyin, yüklətdirin!🐮",
      color: "#F9D8D6",
    },
    {
      user: "Əbülfəz Mirəliyev",
      loc: "Qax, Armudlu kəndi",
      comment:
        "Geniş məlumat bazası mənə əkinlərimdə yaranan problemləri həll etməkdə çox kömək edir! Təşəkkürlər AgroNese!",
      color: "#EFF9DA",
    },
  ];

  return (
    <Element name="testimonials" className={styles.container}>
      <div>
        <h1>Müştəri məmnuniyyəti</h1>
        <div className={styles.testimonials}>
          {items.map((el) => (
            <TestimonialItem color={el.color} user={el.user} loc={el.loc}>
              {el.comment}
            </TestimonialItem>
          ))}
        </div>
      </div>
    </Element>
  );
}
function TestimonialItem({ children, user, loc, color }) {
  return (
    <div className={styles.item} style={{ backgroundColor: color }}>
      <h2>{user}</h2>
      <p className={styles.location}>{loc}</p>
      <p className={styles.comment}>{children}</p>
    </div>
  );
}
export default Testimonials;
