import css from "./styles.scss";

const Profile = ({ src, name, title, children }) => (
  <div className={css.profile}>
    <div className={css.portrait}>
      <img src={src} />

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
