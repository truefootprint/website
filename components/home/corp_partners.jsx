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
              <a href="https://materra.earth/">Materra</a>
            </li>
            <li>
              <a href="https://humannature-places.com/">Human+Nature </a>
            </li>
            <li>
              <a href="https://www.hoganlovells.com/">Hogan Lovells </a>
            </li>
            <li>
              <a href="https://www.centeronbusinessandpoverty.com/">Center on Business and Poverty</a>
            </li>
            <li>
              <a href="https://catalyst2030.net/">Catalyst 2030 (founding member)</a>
            </li>
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
                  <a href="https://materra.earth/">
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
                  <a href="https://www.centeronbusinessandpoverty.com/">
                    <Image src="/static/center_on_business_and_poverty.png" width={130} height={130} fluid />
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
