import css from "./styles.module.scss";
import { Image, ListGroup, Col, Row } from "react-bootstrap";

const CorpPartners = () => (
  <Row>
    <Col>
      <section className={`${css.full_width} ${css.gradient}`}>
        <div className={css.wrap}>
          <h4 className={css.partnersColor}>PARTNERS</h4>
          <ol style={{ listStyle: "decimal" }}>
            <li>
              <a href="https://www.replantcapital.com/">
              rePlant Capital
              </a>
            </li>
            <li>
              <a href="https://downforce.tech/">Downforce</a>
            </li>
            <li>
              <a href="https://humannature-places.com/">Human+Nature</a>
            </li>
            <li>
              <a href="https://www.hoganlovells.com/">Hogan Lovells</a>
            </li>
            <li>
              <a href="https://www.adportsgroup.com/en">AD Ports Group</a>
            </li>
            <li>
              <a href="https://catalyst2030.net/">Catalyst 2030 (founding member)</a>
            </li>
            <li>
              <a href="https://greenpeople.earth/">GreenPeople</a>
            </li>
          </ol>
          <br />
          <Row>
            <Col >
              <ListGroup horizontal className={css.custom_list_group}>
              <ListGroup.Item className={css.list_group_item}>
                  <a href="https://www.replantcapital.com/">
                    <Image src="/static/replant.png" fluid />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={css.list_group_item}>
                  <a href="https://downforce.tech/">
                    <Image src="/static/df.png" fluid />
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
                  <a href="https://www.adportsgroup.com/en">
                    <Image src="/static/ad.png" width={130} height={130} fluid />
                  </a>
                </ListGroup.Item> 
                <ListGroup.Item className={css.list_group_item}>
                  <a href="https://www.catalyst2030.com/">
                    <Image src="/static/cata.png" fluid />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={css.list_group_item}>
                  <a href="https://www.greenpeople.earth/">
                    <Image src="/static/greenpeople.png" fluid />
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
