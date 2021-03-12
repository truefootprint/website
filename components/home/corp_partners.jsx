import css from "./styles.module.scss";
import { Image, ListGroup, Col, Row } from "react-bootstrap";

const CorpPartners = () => (
  <Row>
    <Col>
      <section className={`${css.full_width} ${css.gradient}`}>
        <div className={css.wrap}>
          <h4 className={css.partnersColor}>PARTNERS</h4>
          <ul style={{ listStyle: "decimal" }}>
            <li>
              <a href="https://www.humancapitalnetwork.com/">
                Human Capital Network{" "}
              </a>
            </li>
            <li>
              <a href="https://besystemic.com/">Systemic </a>
            </li>
            <li>
              <a href="https://humannature-places.com/">Human+Nature </a>
            </li>
            <li>
              <a href="https://www.hoganlovells.com/">Hogan Lovells </a>
            </li>
            <p>
              and are founding members of{" "}
              <a href="https://catalyst2030.net/">Catalyst 2030</a>
            </p>
          </ul>
          <br />
          <Row>
            <Col md={{offset: 2, span: 8}}>
              <ListGroup horizontal className={css.custom_list_group}>
                <ListGroup.Item className={css.list_group_item}>
                  <a href="https://www.humancapitalnetwork.com/">
                    <Image src="/static/hcn.png" fluid />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={css.list_group_item}>
                  <a href="https://www.besystemic.com/">
                    <Image src="/static/sys.png" fluid />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={css.list_group_item}>
                  <a href="https://www.humannature-places.com/">
                    <Image src="/static/hunat.png" fluid />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={css.list_group_item}>
                  <a href="https://www.hoganlovells.com/">
                    <Image src="/static/hogan.png" fluid />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={css.list_group_item}>
                  <a href="https://www.catalyst2030.com/">
                    <Image src="/static/cata.png" fluid />
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </section>
    </Col>
  </Row>
);

export default CorpPartners;
