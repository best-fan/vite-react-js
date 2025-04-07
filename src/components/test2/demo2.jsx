import './demo2.css';
const MyUser = () => {
  const user = {
    name: '张思德',
    age: '28',
    img: 'https://img1.baidu.com/it/u=3598104138,3632108415&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
  };
  return (
    <>
      <div className='user-infor'>
        <img className='user-img' src={user.img} alt={user.name} />
        <div className='user-info'>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      </div>
    </>
  );
};
export default MyUser;
