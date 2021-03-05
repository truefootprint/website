import css from "./styles.module.scss";

const Profile = ({ src, name, title, children }) => (
  <div className={css.profile}>
    <div className={css.portrait}>
      <img src={src} width={150} height={160}/>

      <div className={css.under}>
        <p className={css.name}>{name}</p>
        <p className={css.title}>{title}</p>
      </div>
    </div>

    <div className={css.blurb}>
      {children}
    </div>
  </div>
);

export default Profile;
