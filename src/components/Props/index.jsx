import './index.css';

// interface UserCardProps {
//   name: string;
//   email: string;
//   address: {
//     city: string;
//     street: string;
//     suite: string;
//   };
//   phone: string;
//   company: {
//     name: string;
//   };
// }
// ts定义 使用 React.FC<{Props}>
// const UserCard:React.FC<UserCardProps> = (props) => { }

//Props 使用默认值
// const UserCard1 = ({ name = '123', ...props }) => {
//   console.log(props);
//   console.log(name);
// };

//  props.children 插槽
const UserCard = (props) => {
  const { name, email, address, phone, company, getName } = props;

  // 子组件向父组件通讯
  const nameHander = () => {
    getName(name);
  };
  return (
    <div className='my-user-card'>
      <div className='user-card-title' onClick={nameHander}>
        {name}
      </div>
      <div className='user-card-content'>
        <div className='user-card-content-item'>Email:{email}</div>
        <div className='user-card-content-item'>
          Address:{address.city}-{address.street}-{address.suite}
        </div>
        <div className='user-card-content-item'>Phone:{phone}</div>
        <div className='user-card-content-item'>Company:{company.name}</div>
        {/* 插槽 */}
        {props.children}
      </div>
    </div>
  );
};
export const CardList = () => {
  const userList = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
  ];

  const parentHander = (params) => {
    console.log('父组件接受子组件传递过来的值', params);
  };
  return (
    <div>
      {userList.map((user, index) => (
        // 使用 props 传递数据
        <UserCard key={user.id} {...user} getName={parentHander}>
          <div className='chacao'>这是个插槽的东西{index}</div>
          <div className='chacao'>这是个插槽2的东西{index}</div>
        </UserCard>
      ))}
      <UseParentDemo />
    </div>
  );
};

// Props支持的传参类型
const PropsDemo = () => {
  return (
    <div>
      <CardList
        arr={[1, 2, 3]}
        obj={{ name: 'zhangsan' }}
        num={123}
        boole={true}
        fun={() => {}}
        ele={<div>123</div>}
        null={null}
        undefined={undefined}
      />
    </div>
  );
};

// 兄弟组件通信

const Child1 = (props) => {
  const { name } = props;
  // 发送方
  //  1、 创建自定义事件   new Event 原生浏览器支持
  const e = new Event('on-Child1');
  const sendMsg = () => {
    // 2、 触发自定义事件
    e.detail = { name };
    console.log('Child1发送了', e.detail);
    window.dispatchEvent(e);
  };
  return (
    <div>
      <div>子组件11-{name}</div>
      <button onClick={sendMsg}>发送参数</button>
    </div>
  );
};
const Child2 = (props) => {
  const { name } = props;
  window.addEventListener('on-Child1', (e) => {
    console.log('Child2接收到了', e.detail);
  });
  return (
    <div>
      <div>子组件22-{name}</div>
    </div>
  );
};
// 兄弟组件通信Demo  使用发布订阅模式
const UseParentDemo = () => {
  return (
    <div>
      <div>兄弟组件通信</div>
      <Child1 name={'zhangsan'} />
      <Child2 name={'lisi'} />
    </div>
  );
};
