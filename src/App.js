import React, { useState, Component } from "react";
import { FilePdfOutlined, MailFilled, GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import './App.css';
import { Button, Layout, Menu, Breadcrumb, Row, Col, Typography, Divider, Affix, Card, Tooltip } from 'antd';

import logo from "./logo.png";
import tony from "./tony.jpg";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;


class Menu1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site-layout-content">
        <Row justify="center">
          <Title style={{ fontFamily: "Georgia serif" }}> Tony Fang </Title>
        </Row>
        <Divider>About Me</Divider>
        <Row justify="center" style={{ marginTop: "50px" }}>
          <Card bordered>
            <img src={tony} alt="image of me" width="270px" height="377px"/>
          </Card>
        </Row>
        <Row style={{height: "300px"}} justify="center" align="middle">
          <Col span={6}>
            <Row>
              <p>
                <b>
                  Hello, my name is Tony!
                  I am a fourth year student studying Information Technology Management at the University of Waterloo.
                </b>
              </p>
            </Row>
            <Row>
              <p style={{margin: "0"}}>
                <b>
                  In my spare time, I enjoy programming, cooking, playing games, going on walks, and working out.
                </b>
              </p>
            </Row>
          </Col>

          <Col span={8}>
            <Row justify="center">
              <Tooltip title="Click to open!">
                <Button href="/reactAppClient/tony-resume.pdf" target="_blank" type="primary" shape="round" size="large" icon={<FilePdfOutlined />}> My Resume </Button>
              </Tooltip>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

class Menu2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site-layout-content">
        <Row>
            <Col span={6}>
              Menu 2
            </Col>
            <Col span={6}>
              Menu 2
            </Col>
            <Col span={6}>
              Menu 2
            </Col>
            <Col span={6}>
              Menu 2
            </Col>
        </Row>
      </div>
    )
  }
}

class Menu3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site-layout-content">
        <Row>
            <Col span={6}>
              Menu 3
            </Col>
            <Col span={6}>
              Menu 3
            </Col>
            <Col span={6}>
              Menu 3
            </Col>
            <Col span={6}>
              Menu 3
            </Col>
        </Row>
      </div>
    )
  }
}

class Menu4 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site-layout-content">
        <Row>
            <Col span={6}>
              Menu 4
            </Col>
            <Col span={6}>
              Menu 4
            </Col>
            <Col span={6}>
              Menu 4
            </Col>
            <Col span={6}>
              Menu 4
            </Col>
        </Row>
      </div>
    )
  }
}

class Menu5 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site-layout-content">
        <Row justify="center">
          <Title style={{ fontFamily: "Georgia serif" }}> Contact </Title>
        </Row>
        <Divider/>
        <Row style={{height: "100px"}} justify="center" align="middle">
          <p>
            You can reach me at:
          </p>
        </Row>

        <Row justify="center" style={{ fontSize: "50px" }}>
          <Col span={8}>
            <Row align="space-around">
              <a href="mailto:t24fang@uwaterloo.ca" target="_blank" style={{ color: "#f0f2f5" }}>
                <MailFilled />
              </a>
              <a href="https://github.com/landf2000" target="_blank" style={{ color: "#f0f2f5" }}>
                <GithubOutlined />
              </a>
              <a href="https://www.linkedin.com/in/tony-fang-84b887164/" target="_blank" style={{ color: "#f0f2f5" }}>
                <LinkedinFilled />
              </a>
            </Row>
          </Col>
        </Row>

      </div>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {click: "1"};

    this.handleClick = this.handleClick.bind(this);
    this.menuSelector = this.menuSelector.bind(this);
  }


  handleClick(e) {
    console.log("Something was clicked");
    console.log(e)
    this.setState({click: e.key});
  }

  menuSelector(clickState) {
    switch(clickState) {
      case "1":
        return <Menu1 />;
      case "2":
        return <Menu2 />;
      case "3":
        return <Menu3 />;
      case "4":
        return <Menu4 />;
      case "5":
        return <Menu5 />;
    }
  }

  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Affix offsetTop={0}>
            <Header>
              <img src={logo} style={{ float: "left", width: "31px", height: "31px", margin: "16px 24px 16px 0", backgroundColor: "transparent" }} alt="logo" />
              <Menu onClick={this.handleClick} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key={1}>About</Menu.Item>
                <Menu.Item key={2}>Menu 2</Menu.Item>
                <Menu.Item key={3}>Menu 3</Menu.Item>
                <Menu.Item key={4}>Menu 4</Menu.Item>
                <Menu.Item key={5}>Contact</Menu.Item>
              </Menu>
            </Header>
          </Affix>
          <Content>
            
            {this.menuSelector(this.state.click)}

          </Content>
          <Footer style={{ textAlign: 'center' }}>Tony Fang © 2021</Footer>
        </Layout>

        
      </div>
    );
  }
}

export default App;
