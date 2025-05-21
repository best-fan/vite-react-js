/* action  一般用于表单提交，删除，修改等操作。 */
import { useSubmit, useNavigation } from 'react-router';
import { Card, Form, Input, Button } from 'antd';
export const RouterActionDemo = () => {
  const submit = useSubmit();
  //  获取navigation状态
  const navigation = useNavigation();
  // 提交formData数据
  //  const formData = new FormData();
  //  formData.append("email", "test@test.com");
  //  formData.append("password", "123456");
  //  const submit = useSubmit();
  //  submit(formData);
  // 提交json数据
  //   submit(JSON.stringify({ email: "test@test.com", password: "123456" }), {
  //   method: "POST",
  //   encType: "application/json",
  // });
  // 提交text数据
  //  submit("test", { method: "POST", encType: "text/plain" });
  // 提交urlencoded数据
  //  submit("name=test&email=test@test.com", { method: "POST", encType: "application/x-www-form-urlencoded" });
  // 提交queryString数据
  //  submit([["email", "test@test.com"], ["password", "123456"]], { method: "POST"});
  return (
    <>
      <Card>
        {/* <div>routerActionDemo</div> */}
         {navigation.state === 'loading' && <div>loading...</div>}
         {navigation.state === 'submitting' && <div>submitting...</div>}
        <Form
          onFinish={(values) => {
            console.log('values', values);
            submit(values, { method: 'POST' });
          }}>
          <Form.Item name='name' label='姓名'>
            <Input />
          </Form.Item>
          <Form.Item name='age' label='年龄'>
            <Input />
          </Form.Item>
          <Button type='primary' htmlType='submit' disabled={navigation.state === 'submitting'}>
            提交
          </Button>
        </Form>
      </Card>

    </>
  );
};

//GET请求才会触发loader，所以适合用来获取数据
import { useLoaderData } from 'react-router';
// 使用 useLoaderData 获取路由加载的数据
export const RouterLoaderDemo = () => {
  const { data, dataId } = useLoaderData();
  return (
    <>
      <h1>routerLoaderDemo</h1>
      <div>id:{dataId}</div>
      {[data].map((item) => {
        return (
          <>
            <div>name:{item.name}</div>
            <div>email:{item.email}</div>
            <div>body:{item.body}</div>
            <div>postId:{item.postId}</div>
          </>
        );
      })}
    </>
  );
};
