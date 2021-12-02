import React, { useState, Component } from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Layout, Menu, Breadcrumb, Row, Col, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;


class Menu1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site-layout-content">
        <Row justify="center">
          <Title> About Me </Title>
        </Row>
        <Row>
          <Col className="vertical-align text-center" span={12}>
            <Row justify="end">
              <p>
                Hello!
                I am a fourth year student studying Information Technology Management at the University of Waterloo.
              </p>
            </Row>
            <Row>
              <p>
                
              </p>
            </Row>
          </Col>
            
          <Col span={12}>
            <Row>
              <Button href="/reactAppClient/tony-resume.pdf"> Test </Button>
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
        <Row>
            <Col span={6}>
              Menu 5
            </Col>
            <Col span={6}>
              Menu 5
            </Col>
            <Col span={6}>
              Menu 5
            </Col>
            <Col span={6}>
              Menu 5
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
        <Header>
          <Menu onClick={this.handleClick} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key={1}>About</Menu.Item>
            <Menu.Item key={2}>Menu 2</Menu.Item>
            <Menu.Item key={3}>Menu 3</Menu.Item>
            <Menu.Item key={4}>Menu 4</Menu.Item>
            <Menu.Item key={5}>Menu 5</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          
          {this.menuSelector(this.state.click)}

        </Content>
        <Footer style={{ textAlign: 'center' }}>Tony Fang © 2021</Footer>
        </Layout>

        
      </div>
    );
  }
}

export default App;
