import { MyButton } from '../../components/test1/demo1';
import { Main } from '../../components/main/main';
import MyUser from '../../components/test2/demo2';
import { Demo3 } from '../../components/test3/demo3';
import { MainPanel, MainPanel2, UserList, ClickButton, UpdateView, MyShareBtn } from '../../components/test4';

export default function BaseView() {
  return (
    <div className='BaseView'>
      <Main />
      <MyButton />
      <MyUser />
      <Demo3 />
      <MainPanel />
      <MainPanel2 />
      <UserList />
      <ClickButton />
      <UpdateView />
      <MyShareBtn />
    </div>
  );
}
