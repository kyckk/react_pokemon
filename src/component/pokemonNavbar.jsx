import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pokemonlogo from "../images/pokemonlogo.png";
import "../static/Nav.css";
import React, { useState, useEffect, useRef } from "react";
const PokemonNavbar = () => {
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);

  useEffect(() => {
    // 페이지 로드 시 첫 번째 요소 밑줄 위치 설정
    const firstItem = navRef.current?.querySelector("li a");
    if (firstItem) {
      updateUnderline(firstItem);
    }
  }, []);

  const updateUnderline = (element) => {
    console.log(
      "element.offsetWidth",
      element.offsetLeft,
      element.offsetHeight
    );
    setUnderlineStyle({
      left: element.offsetLeft,
      width: element.offsetWidth,
    });
  };

  return (
    <Navbar
      className="bg-body-#dc3545  justify-content-between mb-4"
      style={{ height: "120px", objectFit: "cover" }}
    >
      <Form inline className="h-100">
        <Image src={pokemonlogo} className="h-100"></Image>
      </Form>
      <div className="container flex-nowrap h-100">
        <nav id="gnb" className="">
          <ul className="gnb" ref={navRef}>
            {/* 움직이는 밑줄 */}
            <div id="horizontal-underline" style={underlineStyle}></div>

            {[
              {
                href: "/List",
                className: "warning",
                icon: "icon-news",
                text: "목록",
              },
              {
                href: "/Detail",
                className: "primary",
                icon: "icon-game",
                text: "상세",
              },
              {
                href: "https://pokemoncard.co.kr/",
                className: "secondary",
                icon: "icon-card",
                text: "카드 게임",
              },
              {
                href: "/animation",
                className: "secondary2",
                icon: "icon-ani",
                text: "애니메이션",
              },
              {
                href: "/goods",
                className: "danger",
                icon: "icon-ball",
                text: "상품",
              },
            ].map((item, index) => (
              <li
                key={index}
                onMouseEnter={(e) => updateUnderline(e.currentTarget)}
              >
                <a href={item.href} className={item.className}>
                  <i className={item.icon}></i> {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          {/* <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col> */}
        </Row>
      </Form>
    </Navbar>
  );
};
export default PokemonNavbar;
