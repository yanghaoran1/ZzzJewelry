import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './sass/App.css';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import Cart from './components/Cart';
import Mall from './components/Mall';
import Custom from './components/Custom';
import Found from './components/Found';
import Mine from './components/Mine';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu:[
        {
          text:'商城',
          path:'/mall',
          name:'Mall',
          icon:'#icon-jiezhi'
        },{
          text:'发现',
          path:'/found',
          name:'Found',
          icon:'#icon-faxian'
        },{
          text:'定制',
          path:'/custom',
          name:'Custom',
          icon:'#icon-zuanshi'
        },{
          text:'购物车',
          path:'/cart',
          name:'Cart',
          icon:'#icon-icon01'
        },{
          text:'个人',
          path:'/mine',
          name:'Mine',
          icon:'#icon-geren'
        },
      ],     
      selectedTab:'Mall'
      
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    //两个问题：1、如何获取路由路径，2、如何获取history对象
    // this.setState({
    //     current:key
    // });
    console.log(666);
  }

  render() {
    return (
      <div className="App" >
        
        <TabBar
        unselectedTintColor="#949494"
        tintColor="#ddc17f"
        barTintColor="white"
        noRenderContent="true"
        >
          {
            this.state.menu.map(menu=>{
              return (
                <TabBar.Item
                  title={menu.name}
                  key={menu.name}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selected={this.state.selectedTab === menu.name}
                  onPress={()=>{
                    this.setState({
                      selectedTab:menu.name,
                    });
                    this.props.history.push(menu.name)
                    console.log(this.state.selectedTab)
                    
                  }  
                  }
                  >
                  
                </TabBar.Item>
              )
            })
          }
        </TabBar>

        <Switch>
          <Route path="/mall" component={Mall}/>
          <Route path="/found" component={Found}/>
          <Route path="/custom" component={Custom}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/found" component={Found}/>
          <Redirect from="/" to="/mall"/>
        </Switch>
      </div>
    );
  }
}

// 利用withRouter高阶组件包装App组件
App = withRouter(App);

export default App;
