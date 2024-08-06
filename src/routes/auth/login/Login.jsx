import {Button, Checkbox, Form, Input, Typography} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {useSingInMutation} from "../../../redux/api/user-api.jsx";
import {useDispatch} from "react-redux";


const {Title, Text} = Typography

const Login = () => {
  const [signIn, {data}] = useSingInMutation()
  const dispatch = useDispatch()
  console.log(data?.payload)

  const navigate = useNavigate()
  const onFinish = (values) => {
    signIn(values)
    dispatch(signInSlice(data?.payload.token))
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
      <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
      >
        <Title className="text-center block pb-2">Log In</Title>
        <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              span: 24,
            }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
              span: 24,
            }}
        >
          <Button className="w-full" type="primary"
                  htmlType="submit">
            Log In
          </Button>
        </Form.Item>
        <Text className="text-center block"> Don't have an account? <Link to="/auth/register">Register</Link></Text>
      </Form>
  )
}
export default Login