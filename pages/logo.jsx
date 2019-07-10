import Logo from "../components/Logo";

export default () => <>
  <div style={{ padding: "4rem" }}>
    <Logo.InlineText />
  </div>

  <div style={{ padding: "4rem" }}>
    <Logo.NoText />
  </div>

  <div style={{ padding: "4rem" }}>
    <Logo.StackedText />
  </div>
</>;
